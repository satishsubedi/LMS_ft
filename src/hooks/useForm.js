import { useEffect, useState } from "react";
import { validator } from "../utils/validator";

const handleOnChange = ({ e, formdata, setFormdata }) => {
  let { name, value, checked } = e.target;
  if (name === "status") {
    console.log(name, value, checked);
    value = checked ? "active" : "inactive";
  }
  setFormdata({
    ...formdata,
    [name]: value,
  });
};

export const useForm = (intialstate) => {
  const [form, setForm] = useState(intialstate);
  const [passworderror, setPasswordError] = useState([]);
  useEffect(() => {
    const error = validator(form.password, form.confirmpassword);
    setPasswordError(error);
  }, [form.password, form.confirmpassword]);
  return {
    form,
    setForm,
    handleOnChange: (e) =>
      handleOnChange({ e, formdata: form, setFormdata: setForm }),
    passworderror,
  };
};
