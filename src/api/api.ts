import axios from "./axios";
import { IUserLoginPayload } from "./contracts";

export const baseUrl = "https://api.react-learning.ru/";

export const LoginReguest = (payload: IUserLoginPayload) => {
  return axios.post(`${baseUrl}signin`, payload);
};
