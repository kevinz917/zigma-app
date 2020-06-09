import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { PrimaryButton } from "../../components/core/button";
import LayoutStyles from "../../styles/core/layout";
import BarInput from "../../components/core/barinput";
import TypographyStyles from "../../styles/core/typography";

import axios from "axios";

//@refresh reset

const LoginLanding = ({ navigation, route }) => {
  const validateLogin = (username, password) => {
    if (password.length == 0) {
      Alert.alert("Enter a real password! ");
    } else {
      const loginObject = {
        email: username,
        password: password,
      };

      Alert.alert(username + " " + password);
      axios
        .post("https://zigma.azurewebsites.net/api/auth/login", loginObject)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          const responsemessage = error.response.data.error;

          console.log(error.response.data);

          //   Alert.alert(responsemessage);
        });

      //BACKEND API CALL HERE?
    }
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={LayoutStyles.container}>
      <Text style={TypographyStyles.h1}>Login</Text>
      <BarInput
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Username"
      />
      <BarInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
      />
      <PrimaryButton
        title="Continue"
        onPress={() => validateLogin(username, password)}
        style={{ marginBottom: 40 }}
      />
    </View>
  );
};

export default LoginLanding;
