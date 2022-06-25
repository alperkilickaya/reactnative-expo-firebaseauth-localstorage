import { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";
import axios from "axios";

/* {
  "rules": {
    ".read": "now < 1657573200000",  // 2022-7-12
    ".write": "now < 1657573200000",  // 2022-7-12
  }
} */

function WelcomeScreen() {
  const AuthCtx = useContext(AuthContext);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://reactnative-expensetracker-default-rtdb.firebaseio.com/messages.json?auth=" +
          AuthCtx.token
      )
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        setMessage(() => {
          if (err.message.includes("401")) {
            return "Unauthorized USER!";
          }
        });
      });
  }, []);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
