import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/custominput/CustomInput.jsx";
import { useForm } from "../../hooks/useForm.js";
import { signInUserApi } from "../../services/authAPI.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAction } from "../../features/user/userAction.js";
import { useNavigate } from "react-router-dom";
const initialState = {};
const SignInPage = () => {
  const { form, handleOnChange } = useForm(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    user?._id && navigate("/user");
  }, [user?._id, navigate]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      const { payload } = await signInUserApi(form);

      // if (payload?.accessJWT) {
      sessionStorage.setItem("accesstoken", payload.accessJWT);
      localStorage.setItem("refreshtoken", payload.refreshJWT);

      //call api
      dispatch(fetchUserAction());
      // }

      //get user and redirecting to dashboard
    }
  };
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
