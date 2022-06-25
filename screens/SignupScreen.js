import { useState, useContext } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { Alert } from "react-native";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { errorMessageHandler } from "../util/errorMessages";
import { AuthContext } from "../store/auth-context";

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const AuthCtx = useContext(AuthContext);
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      AuthCtx.authenticate(token);
    } catch (e) {
      Alert.alert(
        "Authentication failed",
        errorMessageHandler(e.response.data.error.message)
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Authenticating" />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
};

export default SignupScreen;
