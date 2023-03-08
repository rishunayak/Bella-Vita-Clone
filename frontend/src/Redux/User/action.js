import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionTypes"
import axios from "axios"

export const loginUser=(login)=>dispatch=>
{ 
   dispatch({type:USER_LOGIN_REQUEST})

  return axios.post(`https://mock15-2cqj.onrender.com/users/login`,login).then(r=>dispatch({type:USER_LOGIN_SUCCESS,payload:r.data})).catch(e=>dispatch({type:USER_LOGIN_FAILURE}))
   
}


export const registerUser=(register)=>dispatch=>
{
  dispatch({type:USER_REGISTER_REQUEST})
  return axios.post("https://mock15-2cqj.onrender.com/users/register",register)
  .then(r=>dispatch({type:USER_REGISTER_SUCCESS,payload:r.data}))
  .catch(r=>dispatch({type:USER_REGISTER_FAILURE}))
}