import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { PrimaryButton } from "../../components/core/button";
import LayoutStyles from "../../styles/core/layout";
import BarInput from "../../components/core/barinput";
import TypographyStyles from "../../styles/core/typography";

//@refresh reset

const Info1 = ({ navigation, route }) => {
  const validatePassword = (password) => {
    if (password.length == 0) {
      Alert.alert("Enter a real password! ");
    } else {
      //BACKEND API CALL HERE?

      const dataObject = { ...route.params.nameObject, password: password };
      navigation.navigate("Info2", { dataObject: dataObject });
      // Alert.alert(JSON.stringify(dataObject.password));
    }
  };
  const [password, setPassword] = useState("");
  return (
    <View style={LayoutStyles.container}>
      <Text style={TypographyStyles.h1}>Pick a password</Text>
      <BarInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
      />
      <PrimaryButton
        title="Continue"
        onPress={() => validatePassword(password)}
        style={{ marginBottom: 40 }}
      />
    </View>
  );
};

export default Info1;
