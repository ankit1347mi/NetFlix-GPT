export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!isNameValid) {
    return "Please enter valid name";
  }
  if (!isEmailValid) {
    return "Email Id is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }
  return null;
};
