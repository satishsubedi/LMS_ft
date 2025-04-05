import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { useForm } from "../../hooks/useForm.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CustomInput from "../../components/custominput/CustomInput";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { getOTP, resetPasswordApi } from "../../services/authAPI.js";
import { useNavigate } from "react-router-dom";

const initialState = {};
const RequestOTPAgain = 10;
const ForgetPassword = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const [passwordreset, setPasswordReset] = useState(false);
  const [isOTPpending, setIsOTPPending] = useState(false);
  const [isBtnOTPdisabled, setIsBtnDisabled] = useState(false);
  const [counter, setCounter] = useState(0);
  const { handleOnChange, form, setForm, passworderror } =
    useForm(initialState);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setIsBtnDisabled(false);
    }
  }, [counter]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    setIsOTPPending(true);
    setIsBtnDisabled(true);
    const { status } = await getOTP({ email });
    status === "success" && setPasswordReset(true);
    setIsOTPPending(false);
    setIsBtnDisabled(true);
    setCounter(RequestOTPAgain);
  };
  const handleOnPasswordReset = async (e) => {
    e.preventDefault();
    const payload = {
      email: form.email,
      otp: form.otp,
      password: form.newpassword,
    };
    const response = await resetPasswordApi(payload);
    if (response?.status === "success") {
      setTimeout(() => navigate("/Login"), 3000);
    }
  };

  return (
    <div className="signinbackground d-flex justify-content-center align-items-center">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Forget Password 😒😒!!</Card.Title>
            <p>Fill up the form below to request the otp</p>

            <Form onSubmit={handleOnSubmit}>
              <CustomInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter Email"
                required
                passRef={emailRef}
              />

              <div className="d-grid">
                <Button type="submit" disabled={isBtnOTPdisabled}>
                  {!isOTPpending
                    ? // <Spinner animation="border" variant="warning" />
                      "Request OTP"
                    : `Request OTP in  ${counter}`}
                </Button>
              </div>
            </Form>

            {passwordreset && (
              <>
                <p> Request OTP after {counter} sec</p>

                <Alert className="bg-success">
                  Please check the email for the password reset
                </Alert>
                <Form onSubmit={handleOnPasswordReset}>
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="OTP"
                    name="otp"
                    type="number"
                    placeholder="123456"
                    required
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="New Password"
                    name="newpassword"
                    type="password"
                    placeholder="******"
                    required
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="Conform Password"
                    name="conformpassword"
                    type="password"
                    placeholder="*******"
                    required
                    onChange={handleOnChange}
                  />

                  <div className="d-grid">
                    <Button type="submit">Reset Password Now</Button>
                  </div>
                </Form>
                <ul className="text-danger">
                  {passworderror.length > 0 &&
                    passworderror.map((error) => <li key={error}>{error}</li>)}
                </ul>
              </>
            )}
            <div className="text-end my-3">
              Login Here ? <a href="/Login">Login</a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ForgetPassword;
