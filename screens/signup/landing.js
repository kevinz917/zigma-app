import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { PrimaryButton } from "../../components/core/button";
import LayoutStyles from "../../styles/core/layout";
import BarInput from "../../components/core/barinput";
import TypographyStyles from "../../styles/core/typography";

//@refresh reset

const Landing = ({ navigation }) => {
  const validateValue = (firstname, lastname, school, email) => {
    if (firstname.length == 0) {
      Alert.alert("Missing first name! ");
    } else if (lastname.length == 0) {
      Alert.alert("Missing last name! ");
    } else {
      const nameObject = {
        firstname: firstname,
        lastname: firstname,
        school: school,
        email: email,
      };
      navigation.navigate("Info1", { nameObject: nameObject });
    }
  };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={LayoutStyles.container}>
      <Text style={TypographyStyles.h1}>Sign up</Text>

      <BarInput
        onChangeText={(text) => setFirstname(text)}
        value={firstname}
        placeholder="First name"
      />
      <BarInput
        onChangeText={(text) => setLastname(text)}
        value={lastname}
        placeholder="Last name"
      />
      <BarInput
        onChangeText={(text) => setSchool(text)}
        value={school}
        placeholder="School"
      />
      <BarInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <PrimaryButton
        title="Continue"
        onPress={() => validateValue(firstname, lastname, school, email)}
        style={{ marginBottom: 40 }}
      />
    </View>
  );
};

export default Landing;
