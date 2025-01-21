import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialstate = [
    {
        id: 1, email: "raul@nimap", pass: "123@123", name: "raul", todos: [{ title: "title1", todotext: "todo number 1" }  ] , islogin : false
    },
    {
        id: 1, email: "raul@nimap", pass: "123@123", name: "raul", todos: [{ title: "title1", todotext: "todo number 1" }] , islogin : false
    },
    {
        id: 1, email: "raul@nimap", pass: "123@123", name: "raul", todos: [{ title: "title1", todotext: "todo number 1" }] , islogin : false
    }
]

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        LoginStatus : (state , action) => {}
     }
})