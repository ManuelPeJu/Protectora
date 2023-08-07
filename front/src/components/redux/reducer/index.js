import {
    GET_ALL_DOGS,
    CREATE_USER,
 } from "../actions";


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
        case CREATE_USER:
            return {
            ...state,
            };
    
        default:
            return state;
    }
}

export default rootReducer