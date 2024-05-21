import { create } from "apisauce";
import { Platform } from "react-native";

let url;
if (Platform.OS == 'android') {
  url = "http://10.0.2.2:8000/api";
}
else {
  url = "http://127.0.0.1:8000/api";
}
const apiClient = create({
  baseURL: url
});
export default apiClient;
