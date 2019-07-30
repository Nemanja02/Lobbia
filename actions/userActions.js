import { PROFILE_DATA, LOGOUT, SET_ID, CLEAR_STATE } from "./types";
import { client } from "../pages/_app";
import gql from "graphql-tag";

const fetchQuery = gql`
  query ProfileData($id: ID) {
    getInitialProfileInfo(id: $id) {
      profilePicture
      username
      isOnline
    }
  }
`;


const logoutMutation = gql`
  mutation($id: ID!) {
    logout(id: $id) {
      success
    }
  }
`;

export const clearState = () => dispatch => {
  dispatch({
    type: CLEAR_STATE
  });
};

export const setId = id => dispatch => {
  dispatch({
    type: SET_ID,
    payload: {
      id
    }
  });
};

export const logout = id => async dispatch => {
  try {
    await client.mutate({
      mutation: logoutMutation,
      variables: {
        id
      }
    });
    dispatch({
      type: LOGOUT,
      payload: {
        isOnline: false
      }
    });
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const fetchUserData = id => async dispatch => {
  try {
    const res = await client.query({
      query: fetchQuery,
      variables: {
        id
      }
    });
    delete res.data.getInitialProfileInfo.__typename;
    dispatch({
      type: PROFILE_DATA,
      payload: {
        ...res.data.getInitialProfileInfo
      }
    });
  } catch (e) {
    console.log(e);
  }
};
