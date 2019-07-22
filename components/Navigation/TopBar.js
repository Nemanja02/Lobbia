import React from "react";

import classes from "./TopBar.module.scss";
import FindDialog from "../FindDialog/FindDialog";
import Router from "next/router";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from "@material-ui/core";

import { ExitToApp as LogoutIcon } from "@material-ui/icons";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid rgba(218, 223, 225, .1)",
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
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.dark,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.primary.light
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
            <StyledMenuItem onClick={() => props.logout()}>
              <ListItemIcon>
                <LogoutIcon
                  classes={{
                    root: classes["icon-light-color"]
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </StyledMenuItem>
          </StyledMenu>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
