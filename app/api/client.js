import { create } from "apisauce";
import { Platform } from "react-native";
import axios from "axios";

let url;
// if (Platform.OS == 'android') {
//   url = "http://10.0.2.2:8000/api";
// }
// else {
//   url = "http://127.0.0.1:8000/api";
// }

url = "https://c2cf-2a02-a03f-6a9f-7101-4192-2688-1d92-3d22.ngrok-free.app/api";
const apiClient = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Ngrok-Version": "2",
    "ngrok-skip-browser-warning": "true",
  },
});
export default apiClient;
