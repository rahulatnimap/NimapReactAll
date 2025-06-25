import axios from "axios";

const publicrequest = axios.create({
    baseURL : "https://api.freeapi.app/api/v1/public/"
})


export const publicGet = (endpoint,config="") => {
    return publicrequest.get(`${endpoint}${config}`)
}

export const publicPost = (endpoint , data) => {
    return publicrequest.get(endpoint,data)
}

export const publicPut = (endpoint , id , data) => {
    return publicrequest.put(`${endpoint}/${id}` , data)
}

export const publicDelete = (endpoint , id) => {
    return publicrequest.get(`${endpoint}/${id}`)
}
