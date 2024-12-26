import { useEffect, useState } from "react";
import { validator } from "../utils/validator";

const handleOnChange = ({ e, form, setForm }) => {
  const { name, value } = e.target;
  setForm({
    ...form,
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
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
    passworderror,
  };
};
