export const errorMessageHandler = (message) => {
  switch (message) {
    case "EMAIL_NOT_FOUND":
      return "This email does not exist";
    case "INVALID_PASSWORD":
      return "Invalid password";
    case "INVALID_EMAIL":
      return "Invalid email";
    case "INVALID_CREDENTIALS":
      return "Invalid credentials";
    case "USER_NOT_FOUND":
      return "User not found";
    case "EMAIL_EXISTS":
      return "This email already exists";
    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      return "Too many attempts. Try again later";
    case "OPERATION_NOT_ALLOWED":
      return "Operation not allowed";
    default:
      return "Unknown error. Please try again";
  }
};
