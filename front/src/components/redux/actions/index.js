import axios from "axios"
export const GET_ALL_DOGS = "GET_ALL_DOGS"

export function getAllDogs() {
    return async function(dispatch) {
        let json = await axios.get("http://localhost:3001/dogs")
        dispatch({
            type: GET_ALL_DOGS,
            payload: json.data
        })
    }
}