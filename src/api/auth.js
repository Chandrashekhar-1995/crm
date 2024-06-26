import axios from "axios";

const BASE_URL = "https://relevel-crm-backend.herokuapp.com"


export const userSignup = async (data) => {
    return await axios.post(`${BASE_URL}/crm/api/v1/auth/signup`, data);
}


export const userSignin = async (data) => {
    return await axios.post(`${BASE_URL}/crm/api/v1/auth/signin`, data);
}