import * as actions from "../actions/actionTypes"

const initialState = {
    locations: [],
    newLocation: {}
}

export default function(state=initialState, action) {
    switch (action.type) {
        case actions.FETCH_LOCATIONS:
            return {
                ...state,
                locations: action.payload
            }
        default:
            return state;
    }
}