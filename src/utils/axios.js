import Axios from "axios";
import Is_authorized from "./authorization";
import router from "@/routes";

const axios = Axios.create({
    baseURL: "https://tasktide.up.railway.app/api",
    headers: {
        "Content-Type": "application/json",

    }
})

const axiosConfiguration = (config) => {
    const token = Is_authorized()
    if (token) {
        config.headers = {
            ...config.headers,
            "authorization":token
        }
        
    }
    return config;
}
axios.interceptors.request.use(axiosConfiguration);

axios.interceptors.response.use(res => res,err =>{
    //   console.log(err)
        if(err.response.status == 401){
            
           router.push("/login")
            // return
        }

  
    return Promise.reject(err);
})
export default axios;
