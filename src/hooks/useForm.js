import { useEffect, useState } from "react";
import { validator } from "../utils/validator";

const handleOnChange = ({ e, formdata, setFormdata }) => {
  const { name, value } = e.target;
  setFormdata({
    ...formdata,
    [name]: value,
  });
  console.log(formdata);
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
