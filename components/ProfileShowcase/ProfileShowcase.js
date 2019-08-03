import React, { Component } from 'react';
import withAuth from "../../lib/withAuth";
import classes from "./ProfileShowcase.module.scss";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { connect } from 'react-redux';

import { CircularProgress, Avatar, Typography, DialogActions, Modal, Grid, Button, Paper, Slide, createMuiTheme, MuiThemeProvider } from "@material-ui/core";


const dangerButtonTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#c03b3b"
        }
    }
})

const profileQuery = gql`
   query ProfileData($id: ID) {
    getInitialProfileInfo(id: $id) {
      profilePicture
      username
      fullName
      dateOfBirth
      createdAt
      isOnline
      accountDescription
    }
  }
`;

class profile extends Component {

    render() {

        const { isOpen, onClose, id } = this.props;

        return (
            <Modal style={{ display: "flex", alignItems: "center", justifyContent: "center" }} open={isOpen} onClose={onClose}>
                <>
                    <i className={`fas fa-times ${classes.icon} ${classes.close}`} onClick={onClose} />
                    <Slide in={isOpen} direction="up" mountOnEnter unmountOnExit>
                        <Paper classes={{ root: classes.profileDialog }}>
                            <Query query={profileQuery} variables={{
                                id
                            }}>
                                {({ data, loading, error }) => {
                                    if (loading) return (
                                        <div style={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                            <CircularProgress />
                                        </div>
                                    );

                                    let userData;
                                    if (!error && data.getInitialProfileInfo) userData = { ...data.getInitialProfileInfo };

                                    let status;
                                    if (userData.isOnline) {
                                        if (userData.accountDescription === "Do not disturb") status = "dnd";
                                        else if (userData.accountDescription === "Away") status = 'away';
                                        else status = "online";
                                    } else status = "offline";

                                    let actionButtons = (
                                        <>
                                            <Button variant="contained" color="primary">Message <i className={`fas fa-envelope ${classes.icon}`} /></Button>

                                            <Button variant="contained" color="secondary">Invite <i className={`fas fa-paper-plane ${classes.icon}`} /></Button>

                                            <MuiThemeProvider theme={dangerButtonTheme}>
                                                <Button variant="contained"
                                                    color="primary"
                                                >Remove <i className={`fas fa-trash ${classes.icon}`} /></Button>
                                            </MuiThemeProvider>
                                        </>
                                    )

                                    if (this.props.user.id === id) actionButtons = (
                                        <>
                                            <Button variant="contained" color="secondary">Edit <i className={`fas fa-pen ${classes.icon}`} /></Button>
                                        </>
                                    )

                                    if (Object.keys(data.getInitialProfileInfo).length > 0) return (
                                        <>
                                            <Grid container>
                                                <Avatar style={{
                                                    width: "70px",
                                                    height: "70px"
                                                }} src={this.props.user.profilePicture} />
                                                <Grid style={{ marginTop: "20px" }} container direction="column">
                                                    {userData.fullName}
                                                    <Typography color="textSecondary" variant="subtitle1">{userData.username}</Typography>
                                                    <Grid container direction="row" alignItems="center">
                                                        <div className={`${classes['status-circle']} ${classes[status]}`} />
                                                        <Typography
                                                            color="textSecondary" variant="caption">
                                                            {userData.isOnline ? userData.accountDescription || "Online" : "Offline"}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <DialogActions>
                                                {actionButtons}
                                            </DialogActions>
                                        </>
                                    );
                                    return null;
                                }}
                            </Query>
                        </Paper>
                    </Slide>
                </>
            </Modal>
        )
    }
}

export default withAuth(connect(state => state)(profile));
