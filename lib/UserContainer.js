import { Container } from "unstated";
import gql from "graphql-tag";
import { execute, makePromise } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { client } from "../pages/_app";

const fetchQuery = gql`
  query ProfileData($id: ID) {
    getInitialProfileInfo(id: $id) {
      fullName
      accountDescription
      createdAt
      profilePicture
    }
  }
`;

export default class UserContainer extends Container {
  state = {
    auth: {
      id: ""
    },
    user: {
      fullName: "",
      username: "",
      dateOfBirth: "",
      createdAt: ""
    }
  };

  getProfileData = async id => {
    // try {
    //   const res = await client.query({
    //     query: fetchQuery,
    //     variables: { id }
    //   });
    //   console.log(res);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  setId = id =>
    this.setState(prevState => ({
      ...prevState,
      auth: {
        ...prevState.auth,
        id
      }
    }));

  setUser = user =>
    this.setState(prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        ...user
      }
    }));

  clearState = () =>
    this.setState(prevState => ({
      ...prevState,
      user: {}
    }));
}
