import {
    GET_ALL_DOGS,
    CREATE_USER,
    GET_USER_LOGIN,
 } from "../actions";


const initalState = {
    allDogs : [],
    isLoggedIn: false,
    email: "",
    password: "",
    user: [],
    admin: true,
}

function rootReducer(state = initalState, action) {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload,
            }
        // case 
        case CREATE_USER:
            return {
            ...state,
            };

            case GET_USER_LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                admin: true,
                email: action.payload.data.email,
                userId: action.payload.data.id,
                userData: action.payload.data,
                userToken: action.payload.tokenSession,

            };

    
        default:
            return state;
    }
}

export default rootReducer