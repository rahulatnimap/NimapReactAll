import axios from 'axios'
// import { generateToken } from '../jwt-setup/jwt-token-setup.js'
import { token } from '../components/Authentication/Login';
// const Token = 'FakeTokenABC'
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
});





axiosInstance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    response => response,
    (error) => {
        const statuCode = error.response ? error.response.status : null;

        if (statuCode === 404) {
            console.log("404 Page Not Found");

        } else if (statuCode === 500) {
            alert("SomeThing Went wrong 500!!");
        }
        return Promise.reject(error);
    }
)
