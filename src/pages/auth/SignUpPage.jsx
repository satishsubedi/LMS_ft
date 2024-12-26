import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CustomInput from "../../components/custominput/CustomInput";
import { SignUpInputes } from "../../assets/custominputs/SignUpInputes";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from "../../hooks/useForm";
import { signUpNewUserApi } from "../../services/authAPI";

const SignUpPage = () => {
  const initialState = {
    lName: "",
    fName: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  };
  const { form, setForm, handleOnChange, passworderror } =
    useForm(initialState);
  const [showpassword, setShowPassword] = useState(true);

  const handleonShowPassword = () => {
    setShowPassword(!showpassword);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmpassword, ...rest } = form;
    // if (confirmpassword !== rest.password) {
    //   return alert("pasword mismatch");
    // }
    const result = await signUpNewUserApi(rest);
    console.log(result);
    result.status === "success" && setForm(initialState);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        style={{ width: "550px" }}
        className="card p-3 mt-3 shadow-lg mb-3"
        // onClick={handleOnSubmit}
      >
        <h3>Signup for Library Management System</h3>
        <hr />
        {SignUpInputes.map((input, key) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <div>
          {!showpassword ? (
            <IoMdEye onClick={handleonShowPassword} />
          ) : (
            <IoMdEyeOff onClick={handleonShowPassword} />
          )}
        </div>
        <div className="py-3">
          <ul className="text-danger">
            {passworderror.length > 0 &&
              passworderror.map((error) => <li key={error}>{error}</li>)}
          </ul>
        </div>
        <Button
          variant="primary"
          type="submit"
          onClick={handleOnSubmit}
          disabled={passworderror.length}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
