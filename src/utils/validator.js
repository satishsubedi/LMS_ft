export const validator = (password = "", conformpassword) => {
  const error = [];
  !password.length > 6 &&
    error.push("The password should be more than of 6 charactes");
  !/[A-Z]/.test(password) &&
    error.push("The password must contain at least one Uppercase character");
  !/[a-z]/.test(password) &&
    error.push("The password must contain at least one Lowercase character");
  !/[0-9]/.test(password) &&
    error.push("The password must contain at least one Numeric character");
  !/[!@#$%^&*()<>{}|]/.test(password) &&
    error.push("The password must contain at least one Special character");
  conformpassword !== password &&
    error.push("The Password and conformPassword should be matched");
  return error;
};
