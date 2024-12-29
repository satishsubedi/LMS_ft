import { fetchUserApi } from "./userApi";
import { setUser } from "./userSlice";

export const fetchUserAction = () => async (dispatch) => {
  //call api
  const userInfo = await fetchUserApi();
  const { status, payload } = userInfo;
  //receive user
  //dispatch user to redux store
  status === "success" && payload?._id && dispatch(setUser(payload));
};
