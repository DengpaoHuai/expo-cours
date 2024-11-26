import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://79a3-90-58-170-121.ngrok-free.app/",
});

export default httpClient;
