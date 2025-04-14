import axios from "axios"


const USER = "users"

const privateapi = axios.create({
 base_Url : "http://localhost:3001"  
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
    return privateapi.delete(`${endpoint}/${id}` , config);
}

export const privatePatch = (endpoint , id , data , config = {}) => {
    return privateapi.patch(`${endpoint}/${id}` , data , config);
}