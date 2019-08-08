import React from "react";
import { Mutation } from "react-apollo";

import classes from "./TopBar.module.scss";
import SearchModal from "../SearchModal/SearchModal";
import ProfileShowcase from "../ProfileShowcase/ProfileShowcase";

import {
  Menu,
  MenuItem,
  ListItemAvatar,
  Avatar,
  ListItemIcon,
  ListItemText,
  withStyles,
  Paper,
  Typography,
  Grid,
  Fade,
  CircularProgress,
  ListItem
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
    backgroundColor: "#3f494e"
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

          let isData = false;

          if (data) {
            isData = true;
            if (data.textSearch.length > 0) {
              data.textSearch.push()
            }
          }


          return (
            <Grid container direction="column" alignItems="center">
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
                    <ListItemText primary={field.fullName} secondary={field.username} />
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

function TopBar(props) {
  const [isSearchModalOpen, setModalVisibility] = React.useState(false);
  const [isDropdownOpen, changeDropdownState] = React.useState(null);

  const toggleSearchModal = prevValue => setModalVisibility(!prevValue);

  const openDropdown = e => changeDropdownState(e.currentTarget);
  const closeDropdown = () => changeDropdownState(null);

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
          clicked={() => toggleSearchModal(isSearchModalOpen)}
          open={isSearchModalOpen}
        />
        <div className={classes.start}>
          <img className={classes.logo} src="assets/PixelArt.png" />
        </div>
        <div className={classes.end}>
          <div className={classes["icon-btn-control"]}>
            <i
              onClick={() => toggleSearchModal(isSearchModalOpen)}
              className={`fas fa-rocket ${classes["icon-special"]}`}
            />
            <i className="fas fa-bell" />
          </div>
          <SearchComponent />
          <div className={classes["icon-btn-control"]}>
            <i className={caretClasses.join(" ")} onClick={openDropdown} />
            <StyledMenu
              anchorEl={isDropdownOpen}
              keepMounted
              open={Boolean(isDropdownOpen)}
              onClose={closeDropdown}
            >
              {dropdownFields.map(el => {
                return (
                  <StyledMenuItem key={el.title} onClick={el.title === "Log out" ? () => props.logout() : null}>
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
    </>
  );
}

export default TopBar;
