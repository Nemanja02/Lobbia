import React from "react";

import classes from "./TopBar.module.scss";
import FindDialog from "../FindDialog/FindDialog";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from "@material-ui/core";

import { ExitToApp as LogoutIcon, Settings } from "@material-ui/icons";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid rgba(218, 223, 225, .05)",
    backgroundColor: "#32393d"
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

function TopBar(props) {
  const [isSearchModalOpen, setModalVisibility] = React.useState(false);
  const [isDropdownOpen, changeDropdownState] = React.useState(null);

  const toggleSearchModal = prevValue => setModalVisibility(!prevValue);

  const openDropdown = e => changeDropdownState(e.currentTarget);
  const closeDropdown = () => changeDropdownState(null);

  let caretClasses = ["fas fa-caret-down"];

  const dropdownFields = [
    {
      title: "Preferences",
      icon: "fas fa-sliders-h",
    },
    {
      title: "Log out",
      icon: "fas fa-caret-square-right",
    }
  ];

  if (isDropdownOpen) caretClasses.push(classes.rotatedIcon);
  if (!isDropdownOpen && caretClasses.length >= 2) caretClasses.splice(1, 1);

  return (
    <div className={classes.topbar}>
      <FindDialog
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
        <span className={classes.logo}>Lobbia</span>
      </div>
      <div className={classes.end}>
        <div className={classes["icon-btn-control"]}>
          <i
            onClick={() => toggleSearchModal(isSearchModalOpen)}
            className={`fas fa-compass ${classes["icon-special"]}`}
          />
          <i className="fas fa-bell" />
        </div>
        <div className={classes.sbar}>
          <input placeholder="Search" className={classes.search} />
          <i className={`fas fa-search ${classes.search_icon_input}`} />
        </div>
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
                <ListItemIcon>
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
  );
}

export default TopBar;
