import React, { Component } from "react";
import { Mutation } from "react-apollo";
import clsx from "clsx";

import classes from "./TopBar.module.scss";
import SearchModal from "../SearchModal/SearchModal";
import ProfileShowcase from "../ProfileShowcase/ProfileShowcase";
import { connect } from 'react-redux';

import {
  Menu,
  MenuItem,
  ListItemAvatar,
  Avatar,
  ListItemIcon,
  ListItemText,
  withStyles,
  Paper,
  Icon,
  Grid,
  IconButton,
  Fade,
  CircularProgress,
  ListItem,
  Badge,
  Typography,
  ListSubheader as MuiListSubheader,
  List as MuiList,
  Popover
} from "@material-ui/core";
import { gql } from "apollo-server-core";

const textSearchMutation = gql`
  mutation($query: String) {
    textSearch(query: $query length: 5) {
      fullName
      username
      profilePicture
      id
    }
  }
`;

const StyledMenu = withStyles({
  paper: {
    backgroundColor: "#32393d",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4)"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: "rgba(255,255,255,0.1)",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.text.primary
      }
    }
  }
}))(MenuItem);

const List = withStyles(theme => ({
  root: {
    width: "380px"
  }
}))(MuiList);


const StyledListSubheader = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    padding: "5px 15px",
    justifyContent: "space-between",
    alignItems: "center"
  }
}))(MuiListSubheader);

const SearchComponent = (props) => {

  const [inputQuery, setInputQuery] = React.useState("");
  const [isQueried, setQueryStatus] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState({
    id: "",
    isOpen: false
  });

  const closeProfileInspect = () => setSelectedUser({ isOpen: false });
  const openProfileInspect = (id) => setSelectedUser({ isOpen: true, id });

  return (
    <>
      <Mutation onError={({ graphQLErrors }) => { return }} mutation={textSearchMutation} variables={{ query: inputQuery }} >
        {(textSearch, { data, loading, error }) => {

          let isData = Boolean(data);


          return (
            <Grid container direction="column" justify="center" alignItems="center">
              <div className={classes.sbar}>
                <input onBlur={() => setQueryStatus(false)} onChange={(e) => {
                  setInputQuery(e.target.value);
                  if (e.target.value.length > 0) {
                    textSearch();
                    setQueryStatus(true);
                  }
                }} placeholder="Search" className={classes.search} />
                <i className={`fas fa-search ${classes.search_icon_input}`} />
              </div>
              <Fade in={isQueried}>
                <Paper classes={{ root: classes.dropdownPaper }}>{isData ? data.textSearch.length > 0 ? data.textSearch.map(field => (
                  <ListItem button onClick={() => openProfileInspect(field.id)} key={field.id}>
                    <ListItemAvatar>
                      <Avatar src={field.profilePicture} />
                    </ListItemAvatar>
                    <ListItemText primary={field.username} secondary={field.fullName} />
                  </ListItem>
                )) : <ListItem>
                    <ListItemText style={{
                      textAlign: "center"
                    }} primary="No results found." />
                  </ListItem> : <Grid container direction="row" justify="center" alignItems="center" style={{
                    width: "100%",
                    padding: "15px 0"
                  }}><CircularProgress /></Grid>}
                  {isData && data.textSearch.length > 0 ? <ListItem component="a" button href={`/search/${inputQuery}`}>
                    <ListItemText primary={`See all results for \`${inputQuery}\``} />
                  </ListItem> : null}
                </Paper>
              </Fade>
            </Grid>
          )
        }}
      </Mutation>
      {selectedUser.isOpen ? <ProfileShowcase id={selectedUser.id} isOpen={selectedUser.isOpen} onClose={closeProfileInspect} /> : null}
    </>
  )
}

class TopBar extends Component {

  state = {
    isSearchModalOpen: false,
    isDropdownOpen: null,
    notificationsAnchorEl: null,
    selectedUser: {
      id: "",
      isOpen: false
    }
  }

  openDropdown = e => this.setState({ isDropdownOpen: e.currentTarget });
  closeDropdown = () => this.setState({ isDropdownOpen: null });

  toggleSearchModal = prevValue => this.setState({ isSearchModalOpen: !prevValue });

  closeProfileInspect = () => this.setState({ selectedUser: { isOpen: false } });

  openProfileInspect = id => this.setState({ selectedUser: { isOpen: true, id } })

  openNotifications = e => this.setState({ notificationsAnchorEl: e.currentTarget });
  closeNotifications = () => this.setState({ notificationsAnchorEl: null });

  render() {
    const { isSearchModalOpen, isDropdownOpen } = this.state;
    let caretClasses = ["fas fa-caret-down"];

    const dropdownFields = [
      {
        title: "About",
        icon: "fas fa-info-circle"
      },
      {
        title: "Help",
        icon: "fas fa-question-circle"
      },
      {
        title: "Preferences",
        icon: "fas fa-sliders-h"
      },
      {
        title: "Log out",
        icon: "fas fa-angle-right",
      }
    ];

    if (isDropdownOpen) caretClasses.push(classes.rotatedIcon);
    if (!isDropdownOpen && caretClasses.length >= 2) caretClasses.splice(1, 1);

    let notifications = [];
    if (this.props.user) if (this.props.user.connections.pending.length > 0) this.props.user.connections.pending.map(el => notifications.push({ ...el, type: "friend-request" }));

    return (
      <>
        <div className={classes.topbar}>
          <SearchModal
            types={[
              {
                heading: "Lobby size: 2",
                subheading: "Just you and your teammate"
              },
              {
                heading: "Lobby size: 5",
                subheading: "Get in touch with 4 others for best experience"
              },
              {
                heading: "Custom",
                subheading: "The way you like it to be"
              }
            ]}
            clicked={() => this.toggleSearchModal(isSearchModalOpen)}
            open={isSearchModalOpen}
          />
          <div className={classes.start}>
            <img className={classes.logo} src="assets/PixelArt.png" />
          </div>
          <div className={classes.end}>
            <div className={classes["icon-btn-control"]}>
              <IconButton onClick={() => this.toggleSearchModal(isSearchModalOpen)}
              >
                <Icon color="primary" classes={{ root: clsx("fas fa-rocket", classes["icon-special"]) }}
                />
              </IconButton>
              <IconButton onClick={e => {
                this.openNotifications(e);
              }}>
                <Badge badgeContent={notifications.length} invisible={notifications.length <= 0} color="primary" >
                  <Icon color="action" className={clsx("fas fa-bell")} />
                </Badge>
              </IconButton>
            </div>
            <SearchComponent />
            <div className={classes["icon-btn-control"]}>
              <IconButton onClick={this.openDropdown}><Icon classes={{ root: clsx(caretClasses) }} /></IconButton>
              <StyledMenu
                anchorEl={isDropdownOpen}
                keepMounted
                open={Boolean(isDropdownOpen)}
                onClose={this.closeDropdown}
              >
                {dropdownFields.map(el => {
                  return (
                    <StyledMenuItem key={el.title} onClick={el.title === "Log out" ? () => this.props.logout() : null}>
                      <ListItemIcon style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                        <i
                          className={`${el.icon} ${classes["icon-light-color"]}`}
                        />
                      </ListItemIcon>
                      <ListItemText primary={el.title} />
                    </StyledMenuItem>
                  )
                })}
              </StyledMenu>
            </div>
          </div>
        </div>
        <Popover anchorEl={this.state.notificationsAnchorEl} anchorOrigin={{
          horizontal: "left",
          vertical: "top"
        }} transformOrigin={{ horizontal: "right", vertical: "top" }} onClose={this.closeNotifications} open={Boolean(this.state.notificationsAnchorEl)}>
          <List subheader={<StyledListSubheader>Notifications <Icon className={clsx("fas fa-bell")} /></StyledListSubheader>}>
            {notifications.length > 0 ? notifications.map(el => {
              switch (el.type) {
                case "friend-request":
                  return <ListItem key={el.id} button onClick={() => this.openProfileInspect(el.id)}>
                    <ListItemAvatar>
                      <Avatar src={el.profilePicture} />
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="subtitle1">
                      {el.fullName} ({el.username})
                    </Typography>} secondary={<Typography variant="caption">sent you a friend request.</Typography>} >
                    </ListItemText>
                  </ListItem>
              }
            }) : <ListItem key="1">
                <ListItemText primary={<Typography variant="h6">Wow, such empty.</Typography>} />
              </ListItem>}
          </List>
        </Popover>
        {this.state.selectedUser.isOpen ? <ProfileShowcase id={this.state.selectedUser.id} isOpen={this.state.selectedUser.isOpen} onClose={this.closeProfileInspect} /> : null}
      </>
    );
  }
}

export default connect(state => state)(TopBar);
