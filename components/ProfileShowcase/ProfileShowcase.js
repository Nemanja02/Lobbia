import React, { Component } from "react";
import classes from "./ProfileShowcase.module.scss";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { connect } from "react-redux";
import clsx from "clsx";

import {
  CircularProgress,
  Avatar,
  Typography,
  DialogActions,
  Modal,
  Grid,
  Button,
  Paper,
  Icon,
  Slide,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const ButtonControlTheme = createMuiTheme({
  palette: {
    text: {
      primary: grey[200],
      secondary: grey[500]
    },

    primary: {
      main: "#ff9a60"
    },
    secondary: {
      main: "#ff4f4f"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        margin: "15px"
      },

      contained: {
        root: {
          margin: "15px",
          color: "#fff !important"
        }
      }
    }
  }
});

const profileQuery = gql`
  query ProfileData($id: ID) {
    getProfileData(id: $id) {
      profilePicture
      username
      fullName
      dateOfBirth
      createdAt
      isOnline
      accountDescription
      connections {
        accepted {
          id
        }
      }
    }
  }
`;

function Profile(props) {
  const { isOpen, onClose, id } = props;

  const [actionVariant, setActionVariant] = React.useState("default");

  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      open={isOpen}
      onClose={onClose}
    >
      <>
        <Slide in={isOpen} direction="up" mountOnEnter unmountOnExit>
          <Paper classes={{ root: classes.profileDialog }}>
            <Query
              fetchPolicy="network-only"
              query={profileQuery}
              variables={{
                id
              }}
            >
              {({ data, loading, error }) => {
                if (loading)
                  return (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <CircularProgress />
                    </div>
                  );

                let userData;
                if (!error && data.getProfileData)
                  userData = { ...data.getProfileData };

                let status;
                if (userData.isOnline) {
                  if (userData.accountDescription === "Do not disturb")
                    status = "dnd";
                  else if (userData.accountDescription === "Away")
                    status = "away";
                  else status = "online";
                } else status = "offline";

                for (let field of props.user.connections.accepted)
                  if (field.id === id) setActionVariant("friends");

                for (let field of props.user.connections.pending)
                  if (field.id === id) setActionVariant("friend-request");

                if (props.user.id === id) setActionVariant("self-profile");

                let actionButtons = null;

                let informationText = null;

                switch (actionVariant) {
                  case "default":
                    informationText = (
                      <Typography variant="caption" color="textSecondary">
                        To see more info about{" "}
                        {
                          <Typography
                            component="span"
                            variant="caption"
                            color="textPrimary"
                          >
                            {userData.username}
                          </Typography>
                        }
                        , send him a connect request.
                      </Typography>
                    );
                    actionButtons = (
                      <MuiThemeProvider theme={ButtonControlTheme}>
                        <Button variant="contained" color="primary">
                          Connect
                          <i className={`fas fa-user-plus ${classes.icon}`} />
                        </Button>
                      </MuiThemeProvider>
                    );
                    break;
                  case "friends":
                    actionButtons = (
                      <MuiThemeProvider theme={ButtonControlTheme}>
                        <Button variant="contained" color="primary">
                          Invite{" "}
                          <i className={`fas fa-paper-plane ${classes.icon}`} />
                        </Button>
                        <Button variant="outlined" color="primary">
                          Message{" "}
                          <i className={`fas fa-envelope ${classes.icon}`} />
                        </Button>
                        <Button variant="outlined" color="secondary">
                          Remove{" "}
                          <i className={`fas fa-trash ${classes.icon}`} />
                        </Button>
                      </MuiThemeProvider>
                    );
                    break;
                  case "self-profile":
                    actionButtons = (
                      <>
                        <Button variant="contained" color="primary">
                          Edit <i className={`fas fa-pen ${classes.icon}`} />
                        </Button>
                      </>
                    );
                    break;
                  case "friend-request":
                    informationText = (
                      <Typography variant="caption" color="textSecondary">
                        {
                          <Typography
                            component="span"
                            color="textPrimary"
                            variant="caption"
                          >
                            {userData.username}
                          </Typography>
                        }{" "}
                        sent you a connect request.
                      </Typography>
                    );
                    actionButtons = (
                      <MuiThemeProvider theme={ButtonControlTheme}>
                        <Button variant="contained" color="primary">
                          Connect
                        </Button>
                        <Button variant="outlined" color="secondary">
                          Decline
                        </Button>
                      </MuiThemeProvider>
                    );
                    break;
                }

                if (Object.keys(data.getProfileData).length > 0)
                  return (
                    <>
                      <Grid
                        justify="center"
                        container
                        direction="column"
                        alignItems="center"
                      >
                        <Grid
                          style={{ marginTop: "20px" }}
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          <Avatar
                            style={{
                              width: "70px",
                              height: "70px",
                              margin: "10px"
                            }}
                            src={userData.profilePicture}
                          />
                          {userData.username}
                          {actionVariant === "self-profile" ? " (You)" : null}
                          <Typography color="textSecondary" variant="subtitle1">
                            {userData.fullName}
                          </Typography>
                          {informationText ? (
                            <Grid
                              justify="center"
                              container
                              direction="row"
                              alignItems="center"
                            >
                              <Icon
                                color="primary"
                                style={{ margin: "10px" }}
                                className={clsx("fas fa-info-circle")}
                                fontSize="small"
                              />
                              <Typography variant="caption">
                                {informationText}
                              </Typography>
                            </Grid>
                          ) : null}
                          {/* <Grid container direction="row" alignItems="center">
                                                    <div className={`${classes['status-circle']} ${classes[status]}`} />
                                                    <Typography
                                                        color="textSecondary" variant="caption">
                                                        {userData.isOnline ? userData.accountDescription || "Online" : "Offline"}
                                                    </Typography>
                                                </Grid> */}
                        </Grid>
                        <Grid
                          className={classes["dialog-action-container"]}
                          container
                          alignItems="center"
                        >
                          {actionButtons}
                        </Grid>
                      </Grid>
                    </>
                  );
                return null;
              }}
            </Query>
          </Paper>
        </Slide>
      </>
    </Modal>
  );
}

export default connect(state => state)(Profile);
