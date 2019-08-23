import { PROFILE_DATA, LOGOUT, SET_ID, CLEAR_STATE } from "./types";
import { client } from "../pages/_app";
import gql from "graphql-tag";

const fetchQuery = gql`
  query ProfileData($id: ID) {
    getProfileData(id: $id) {
      profilePicture
      username
      isOnline
      connections {
        pending {
          id
          username
          isOnline
          profilePicture
          fullName
        }
        accepted {
          id
          username
          isOnline
          profilePicture
          fullName
        }
      }
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

const sendConnectionRequestMutation = gql`
  mutation($id: ID, $connectionId: ID) {
    success
  }
`;

// const cancelConnectionRequestMutation = gql`

// `;

// const acceptConnectionRequestMutation = gql`

// `;

// const removeConnectionMutation = gql`

// `;

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

export const sendConnectionRequest = (id, connectionid) => async dispatch => {
  try {
  } catch (e) {
    console.log(e);
  }
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
    delete res.data.getProfileData.__typename;
    delete res.data.getProfileData.connections.__typename;
    dispatch({
      type: PROFILE_DATA,
      payload: {
        ...res.data.getProfileData
      }
    });
  } catch (e) {
    console.log(e);
  }
};
