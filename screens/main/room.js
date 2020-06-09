import React from "react";
import axios from "axios";

import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PrimaryButton from "../../components/core/button";
import LayoutStyles from "../../styles/core/layout";
import BarInput from "../../components/core/barinput";
import TypographyStyles from "../../styles/core/typography";

import Promptcard from "../../components/cards/promptcard";

//@refresh reset

const user1 = {
  name: "Kevin",
  school: "Yale",
  city: "shanghai",
  email: "kevin.zhang@yale.edu",
  wechatID: "6969696969",
  channelID: "12345",
};

const user2 = {
  name: "Daniel",
  school: "UPenn",
  city: "shanghai",
  email: "dtgoofy@goofius.com",
  wechatID: "adsfasdf",
  channelID: "12345",
};
const user3 = {
  name: "Michael Grimes",
  school: "Goofy State",
  city: "Philly",
  email: "mgrimes@morganstanley,org",
  wechatID: "6969696969",
  channelID: "12345",
};

const users = [user1, user2, user3];

const Room = ({ navigation, route }) => {
  return (
    <View style={LayoutStyles.container}>
      <Promptcard text="hello" />
      <Text style={TypographyStyles.h1}>Room: Design</Text>
      {users.map((user) => (
        <View>
          <Text style={TypographyStyles.h3}>{user.name}</Text>
          <Button
            title="profile"
            onPress={() => navigation.navigate("Profile", { userinfo: user })}
          ></Button>
        </View>
      ))}
    </View>
  );
};
export default Room;

// { dataObject: dataObject }
