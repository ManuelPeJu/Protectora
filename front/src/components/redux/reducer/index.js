import { GET_ALL_DOGS } from "../actions";


const initalState = {
    allDogs : [],
}

function rootReducer(state = initalState, action) {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload,
            }
    
        default:
            return state;
    }
}

export default rootReducer