import { apiProcessor } from "../../services/api";

const apiBaseurl = "http://localhost:8000";
const userApiEp = apiBaseurl + "/api/v1/users";
export const fetchUserApi = async () => {
  const obj = {
    url: userApiEp + "/profile",
    method: "get",
    showToast: true,
    isPrivate: true,
  };
  return apiProcessor(obj);
};
