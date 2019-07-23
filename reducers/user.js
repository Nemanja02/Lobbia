import { PROFILE_DATA } from "../actions/types";

const initialUserStore = {
  fullName: "",
  accountDescription: "",
  createdAt: "",
  profilePicture: "",
  dateOfBirth: "",
  username: ""
};

export default (state = initialUserStore, action) => {
  switch (action.type) {
    case PROFILE_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return {
        ...state
      };
  }
};
