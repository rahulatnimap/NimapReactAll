import React from 'react'
import axios from 'axios'

const AxiosError = () => {

   async function fetchData (){
    let res = await axios(`https://dummyjson.com/quotes?limit=100`);
    // console.log(res);
    axios.interceptors.response.use(res => console.log(res),
    error => console.log(error))
    }

    fetchData()
    
    return (
        <div>
            
        </div>
    )
}

export default AxiosError