import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { PrimaryButton } from "../../components/core/button";
import LayoutStyles from "../../styles/core/layout";
import BarInput from "../../components/core/barinput";
import TypographyStyles from "../../styles/core/typography";
import axios from "axios";

//@refresh reset

const Info2 = ({ navigation, route }) => {
  const userdataValidation = (id) => {
    if (id.length == 0) {
      Alert.alert("Valid WeChat ID");
    } else {
      const userDataObject = {
        ...route.params.dataObject,
        wechat: id,
      };
      // Alert.alert(
      //   "User Data",
      //   userDataObject.firstname +
      //     ", " +
      //     userDataObject.lastname +
      //     ", " +
      //     userDataObject.password +
      //     ", " +
      //     userDataObject.wechat +
      //     ", " +
      //     userDataObject.school +
      //     ", " +
      //     userDataObject.email
      // );

      const userObject = {
        firstName: userDataObject.firstname,
        lastName: userDataObject.lastname,
        email: userDataObject.email,
        password: userDataObject.password,
        school: userDataObject.school,
        wechatId: userDataObject.wechat,
      };

      axios
        .post("https://zigma.azurewebsites.net/api/auth/signup", userObject)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          const responsedata = error.response.data.error;
          console.log(error.response.data);

          Alert.alert(responsedata, "Cornell is not an elite school");
        });
      //API CALL
    }
  };
  const [id, setID] = useState("");
  return (
    <View style={LayoutStyles.container}>
      <Text style={TypographyStyles.h1}>One last thing</Text>
      <Text style={TypographyStyles.p1}>
        We need this to find your friends{" "}
      </Text>
      <BarInput
        onChangeText={(text) => setID(text)}
        value={id}
        placeholder="WeChat ID"
      />
      <PrimaryButton
        title="Hop in"
        onPress={() => userdataValidation(id)}
        style={{ marginBottom: 40 }}
      />
    </View>
  );
};

export default Info2;
