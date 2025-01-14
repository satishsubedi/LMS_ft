// import { useForm } from "../../hooks/useForm";

// const { form } = useForm();

export const SignUpInputes = [
  {
    label: "First Name",
    required: true,
    type: "text",
    name: "fName",
    placeholder: "Adam",
    // value: "",
    // value: form.fName,
  },
  {
    label: "Last Name",
    required: true,
    type: "text",
    name: "lName",
    placeholder: "Will",
    // value: "",
    // value: form.lName,
  },
  {
    label: "Email*",
    required: true,
    type: "email",
    name: "email",
    placeholder: "Adam",
    // value: "",
    // value: form.email,
  },
  {
    label: "Phone Number",
    type: "number",
    name: "phone",
    placeholder: "9856789677",
    // value: "",
    // value: form.phone,
  },
  {
    label: "Password",
    required: true,
    type: "password",
    name: "password",
    placeholder: "*******",
    // value: "",

    // value: form.password,
  },
  {
    label: "Confirm Password",
    required: true,
    type: "password",
    name: "confirmpassword",
    placeholder: "*******",
    // value: "",
    // value: form.confirmpassword,
  },
];
