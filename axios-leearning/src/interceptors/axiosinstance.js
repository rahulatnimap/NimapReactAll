import axios from 'axios'

// const Token = 'FakeTokenABC'
export const axiosInstance = axios.create({
    baseURL : 'http://localhost:3000'
});

axiosInstance.interceptors.request.use(
    (config) => {
    const Token = localStorage.setItem("authToken" , 'FakeToken');
        config.headers.Authorization = `Bearer ${Token}`
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    response => response ,
    (error) => {
        const statuCode = error.response ? error.response.status : null;

        if(statuCode === 404) {
            console.log("404 Page Not Found")
        }
        return Promise.reject(error);   
    }
)
