import axios from "axios"

export const ENDPOINT = {
 USER : "users",
 USERDETAILS : "usersDetails"
}

const privateapi = axios.create({
    baseURL : "https://api.freeapi.app/api/v1/public/"  
})


export const privateGET = (endpoint) => {
    return privateapi.get(`${endpoint}`);
}

export const privatePost = (endpoint , data ,  config = {}) => {
    return privateapi.post(`${endpoint}` , data , config);
}

export const privatePut = (endpoint , id , data,   config = {}) => {
    return privateapi.put(`${endpoint}/${id}` , data , config);
}

export const privateDelete = (endpoint , id ,  config = {}) => {
    return privateapi.delete(`${endpoint}/${id}`);
}

export const privatePatch = (endpoint , id , data , config = {}) => {
    return privateapi.patch(`${endpoint}/${id}` , data , config);
}