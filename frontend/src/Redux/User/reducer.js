
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionTypes"


const intialState=
{
    isLoading:false,
    isError:false,
    user:{},
    token:""
}

 const UserReducer=(state=intialState,action)=>
{
   
   switch(action.type)
   {
     case USER_LOGIN_REQUEST:return {...state,isLoading:true}
     case USER_LOGIN_SUCCESS: return {...state,isLoading:false,user:action.payload.user,token:action.payload.token}
     case USER_LOGIN_FAILURE: return {...state,isLoading:false,isError:true}
     
     case USER_REGISTER_REQUEST :return {...state,isLoading:true}
     case USER_REGISTER_SUCCESS :return {...state,isLoading:false}
     case USER_REGISTER_FAILURE :return {...state,isLoading:false,isError:true}
     default : return state
   }
   
}

export default UserReducer