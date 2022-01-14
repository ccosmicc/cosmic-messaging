import axios from "axios";

const BASE_URL = "http://localhost:7000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGFjYmU0OGFhZGIwYmE1Zjk3OTZmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjE5MDk0OSwiZXhwIjoxNjQyNDUwMTQ5fQ.1mBq5RQsPxEaGg94D0BiB8NEmUya6ySeI_GVctrPWXU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
