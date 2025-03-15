import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/custominput/CustomInput.jsx";
import { useForm } from "../../hooks/useForm.js";
import { signInUserApi } from "../../services/authAPI.js";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import {
  autoLoginUser,
  fetchUserAction,
} from "../../features/user/userAction.js";
import { useLocation, useNavigate } from "react-router-dom";
const initialState = {};
const SignInPage = () => {
  const { form, handleOnChange } = useForm(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showSpinnerRef = useRef(true);
  const { user } = useSelector((state) => state.userInfo);
  const location = useLocation();
  console.log(location);
  const path = location?.state?.from ?? "/user";
  useEffect(() => {
    user?._id ? navigate(path) : dispatch(autoLoginUser());
    if (
      sessionStorage.getItem("accesstoken") ||
      localStorage.getItem("refreshtoken")
    ) {
      setTimeout(() => {
        showSpinnerRef.current = false;
      }, 2000);
    } else {
      showSpinnerRef.current = false;
    }
  }, [user?._id, navigate, dispatch]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    if (form.email && form.password) {
      const { payload } = await signInUserApi(form);
      console.log(payload);

      // if (payload?.accessJWT) {
      sessionStorage.setItem("accesstoken", payload.accessJWT);
      localStorage.setItem("refreshtoken", payload.refreshJWT);

      //call api
      dispatch(fetchUserAction());
      // }

      //get user and redirecting to dashboard
    }
  };
  if (showSpinnerRef.current) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center ">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="signinbackground d-flex justify-content-center align-items-center">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Login Here!!</Card.Title>
            <Form onSubmit={handleOnSubmit}>
              <CustomInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter Email"
                required
                onChange={handleOnChange}
              />
              <CustomInput
                label="Password"
                name="password"
                type="password"
                placeholder="*****"
                required
                onChange={handleOnChange}
              />
              <div className="d-grid">
                <Button type="submit">Login</Button>
              </div>
            </Form>
            <div className="text-end my-3">
              Forget Password ? <a href="/forget-password">Reset Now</a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;
