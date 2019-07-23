import { PROFILE_DATA } from "./types";
import { client } from "../pages/_app";
import gql from "graphql-tag";

const fetchQuery = gql`
  query ProfileData($id: ID) {
    getInitialProfileInfo(id: $id) {
      fullName
      accountDescription
      createdAt
      profilePicture
      dateOfBirth
      username
    }
  }
`;

export const fetchUserData = id => async dispatch => {
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
};
