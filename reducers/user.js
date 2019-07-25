import { PROFILE_DATA, LOGOUT, SET_ID, CLEAR_STATE } from "../actions/types";

const initialUserStore = {
  fullName: "",
  accountDescription: "",
  createdAt: "",
  profilePicture: "",
  dateOfBirth: "",
  username: "",
  id: "",
  isOnline: false
};

export default (state = initialUserStore, action) => {
  switch (action.type) {
    case PROFILE_DATA:
      return {
        ...state,
        ...action.payload
      };
    case LOGOUT:
      return {
        ...state,
        ...action.payload
      };
    case SET_ID:
      return {
        ...state,
        ...action.payload
      };
    case CLEAR_STATE:
      return {};
    default:
      return {
        ...state
      };
  }
};
