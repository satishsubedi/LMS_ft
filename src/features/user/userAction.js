import { fetchNewAccessJWTApi } from "../../services/authAPI.js";
import { fetchUserApi } from "./userApi";
import { setUser } from "./userSlice";

export const fetchUserAction = () => async (dispatch) => {
  //call api
  const userInfo = await fetchUserApi();
  console.log(userInfo);
  const { status, payload } = userInfo;
  //receive user
  //dispatch user to redux store
  status === "success" && payload?._id && dispatch(setUser(payload));
};

export const autoLoginUser = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accesstoken");

  if (accessJWT) {
    dispatch(fetchUserAction());
    return;
  }
  const refreshJWT = localStorage.getItem("refreshtoken");
  if (refreshJWT) {
    //fetch accessjwt and set in session storage
    const { payload } = await fetchNewAccessJWTApi();
    if (payload) {
      sessionStorage.setItem("accesstoken", payload);
      dispatch(fetchUserAction());
    }

    // dispatch(fetchUserAction());
  }
};
