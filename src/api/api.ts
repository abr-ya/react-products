import axios from "./axios";
// import { IUserLoginPayload } from "./contracts";

export const bookingUrl = import.meta.env.VITE_API_URL;
export const foodUrl = import.meta.env.VITE_API_FOOD_URL;

// export const LoginReguest = (payload: IUserLoginPayload) => axios.post(`${baseUrl}auth/login`, payload);

export const getProductsAsync = (inputValue: string) => axios.get(`${foodUrl}ingredients?like=${inputValue}`);
