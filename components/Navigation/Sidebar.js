import React from "react";
import classes from "./Sidebar.module.scss";
import NavLink from "./NavLink/NavLink";
import Typography from "../Typography/Typography";
import { connect } from "react-redux";
import ProfileShowcase from "../ProfileShowcase/ProfileShowcase";

function Profile({ profilePicture, username, status }) {
  return (
    <div className={classes.user}>
      <img src={profilePicture} alt={username} />
      <div className={classes.online} />
      <div className={classes.about}>
        <span className={classes.username}>{username}</span>
        <span className={classes.activity}>{status}</span>
      </div>
    </div>
  );
}

function Friend({ profilePicture, username, activity, clicked }) {
  let status;
  switch (activity) {
    case "online":
      status = "green";
      break;
    case "offline":
      status = "black";
      break;
    default:
      status = "green";
  }

  return (
    <div onClick={clicked} className={classes.friend}>
      <img src={profilePicture} alt={username} />
      <div className={`${classes.online} ${classes[status]}`} />
      <div className={classes.about}>
        <span className={classes.username}>{username}</span>
        <span className={classes.activity}>
          {activity.charAt(0).toUpperCase() + activity.slice(1)}
        </span>
      </div>
    </div>
  );
}

export function Sidebar(props) {
  const [activeTab, changeTabState] = React.useState(1);

  const [selectedUser, setSelectedUser] = React.useState({
    id: "",
    isOpen: false
  });

  const switchActiveTab = i => {
    changeTabState(i);
  };

  const closeProfileInspect = () => setSelectedUser({ isOpen: false });
  const openProfileInspect = id => setSelectedUser({ isOpen: true, id });

  let friendList;

  if (props.user.connections.accepted)
    if (props.user.connections.accepted.length > 0)
      friendList = props.user.connections.accepted.map((el, i) => {
        return (
          <Friend
            clicked={() => openProfileInspect(el.id)}
            key={el.id}
            profilePicture={el.profilePicture}
            username={el.username}
            activity={el.isOnline ? "online" : "offline"}
            id={el.id}
          />
        );
      });

  return (
    <>
      <aside
        className={`
          ${classes.container} 
          ${props.opened ? null : classes.closed}
        `}
      >
        <div className={classes.division}>
          <Profile
            profilePicture={props.user.profilePicture}
            username={props.user.username}
            status={props.user.isOnline ? "online" : null}
          />
          <ul className={classes.sidebar}>
            {[
              {
                name: "Feed",
                type: "link"
              },
              {
                name: "Profile",
                type: "button",
                id: props.user.id
              },
              {
                name: "Settings",
                type: "link"
              }
            ].map(el => {
              let faIcon;
              let href;
              if (el.name === "Feed") {
                faIcon = "fas fa-th-list";
                href = "/feed";
              }
              if (el.name === "Profile") {
                faIcon = `fas fa-user`;
                href = `/user/${props.user.id}`;
              }
              if (el.name === "Settings") {
                faIcon = "fas fa-cog";
                href = "/settings";
              }
              return (
                <li key={el.name}>
                  <p className={classes.sidebarEl}>
                    <NavLink
                      type={el.type}
                      id={el.id || null}
                      statePath={props.path.value}
                      path={href}
                      title={el.name}
                      icon={faIcon}
                    />
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`${classes.division} ${classes.growdiv}`}>
          <div className={classes["tab-control"]}>
            <Typography
              active={activeTab === 1 ? true : false}
              clicked={() => switchActiveTab(1)}
              variant="nav-title"
              color="light"
            >
              Connections
            </Typography>
            <Typography
              clicked={() => switchActiveTab(2)}
              active={activeTab === 2 ? true : false}
              variant="nav-title"
              color="light"
            >
              Lobbies
            </Typography>
          </div>
          <div
            id="style-3"
            className={`${classes.scrollable} ${classes.tab_body}`}
          >
            {friendList}
          </div>
        </div>
      </aside>
      {selectedUser.isOpen ? (
        <ProfileShowcase
          id={selectedUser.id}
          isOpen={selectedUser.isOpen}
          onClose={closeProfileInspect}
        />
      ) : null}
    </>
  );
}

export default connect(state => state)(Sidebar);
