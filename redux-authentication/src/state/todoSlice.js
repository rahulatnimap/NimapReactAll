import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   user : null , token : null , isLogin : false,
 emails : [{email : "user@nimap" , password : "123"},{email : "user1@nimap" , password : "123"}]
   
    
}
   const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        setCredentials : (state , action ) => {
            const { user , token , isLogin } = action.payload
            state.user  = user
             state.token = token 
            state.isLogin = isLogin
        },
        Logout : (state , action) => {
          state.user = null 
          state.token = null
          state.isLogin = false
        },
        UpdateEmail : (state , action) => {
         
         const { email , password } = action.payload
         
         state.emails = [...state.emails , { email , password}]
        }
     }
})

export const {setCredentials , Logout , UpdateEmail} = todoSlice.actions

export default todoSlice.reducer