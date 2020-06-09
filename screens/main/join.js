import React, { useState } from "react";
import axios from "axios";

import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { PrimaryButton, SecondaryButton } from "../../components/core/button";
import LayoutStyles from "../../styles/core/layout";
import BarInput from "../../components/core/barinput";
import TypographyStyles from "../../styles/core/typography";

// @refresh reset

const fakeUser = {
  category: "casual",
  userId: "12345678",
};

const JoinPage = ({ navigation, route }) => {
  const [roomID, setRoomID] = useState("");

  const JoinRoom = () => {
    console.log("Joining ... ");
    axios
      .post("https://zigma.azurewebsites.net/api/rooms/join", fakeUser)
      .then(function (response) {
        console.log(response.data);

        setRoomID(response.data.room._id);
      })
      .catch(function (error) {
        console.log(error.response.data);
        //   Alert.alert(responsemessage);
      });
    // API JOIN ROOM CALL
  };

  return (
    <View style={LayoutStyles.container}>
      <Text style={TypographyStyles.h1}>Join page</Text>
      <Text style={TypographyStyles.h2}>Room: {roomID}</Text>

      <PrimaryButton
        title="JoinRoom"
        onPress={JoinRoom}
        style={{ marginBottom: 0, marginTop: 100 }}
      />
      <SecondaryButton title="Sign in" style={{ marginBottom: 40 }} />
    </View>
  );
};

export default JoinPage;
