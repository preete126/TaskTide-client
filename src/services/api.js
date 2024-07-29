import axios from "@/utils/axios"

export const newUser = (param)=>{
    return axios.post("/user/registration", param)
}
export const login = (param)=>{
    return axios.post("/user/login", param)
}