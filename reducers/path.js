import {SET_PATH} from "../actions/types";

const initialPathState = {
    value: ""
}

export default (state = initialPathState, action) => {
    switch(action.type){
        case SET_PATH:
            return {
                ...state,
                value: action.payload
            }
        default:
            return {
                ...state
            }
    }
}