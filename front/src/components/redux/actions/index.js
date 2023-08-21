import axios from "axios"
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const CREATE_USER = "CREATE_USER";
export const GET_USER_LOGIN = "GET_USER_LOGIN";
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";

export function getAllDogs() {
    return async function(dispatch) {
        let json = await axios.get("http://localhost:3001/dogs")
        dispatch({
            type: GET_ALL_DOGS,
            payload: json.data
        })
    }
}

// export function getDogsByBreed(payload) {
//   return async function () {
//     try {
//       let json = await axios.get("http://localhost:3001")
//     } catch (error) {
      
//     }
//   }
// }

export function postUsers(payload) {
    return async function (dispatch) {
      let response = await axios.post(
        "http://localhost:3001/register",
        payload
      );
      return response;
    };
  }

  export default function getUserByLogin(email, password) {
    return async function (dispatch) {
      try {
        let response = await axios.post("http://localhost:3001/user", {
          email: email,
          password: password,
        });
        console.log(response.data);
        console.log(response.data.data);
        console.log(response.data.tokenSession);
        localStorage.setItem("userId", JSON.stringify(response.data.data.id));
        localStorage.setItem("user", JSON.stringify(response.data.data));
        localStorage.setItem(
          "userToken",
          JSON.stringify(response.data.tokenSession)
        );
        localStorage.setItem("admin", JSON.stringify(response.data.data.admin));
        
        return dispatch({
          type: GET_USER_LOGIN,
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }