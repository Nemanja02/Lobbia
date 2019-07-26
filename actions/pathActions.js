import {SET_PATH} from "./types";

export const setPath = path => {
    return {type: SET_PATH, payload: path}
}