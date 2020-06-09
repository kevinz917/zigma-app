import React from "react";
import axios from "axios";

//@refresh reset

import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PrimaryButton from "../../components/core/button";
import LayoutStyles from "../../styles/core/layout";
import BarInput from "../../components/core/barinput";
import TypographyStyles from "../../styles/core/typography";

const UserProfile = ({ navigation, route }) => {
  const { userinfo } = route.params;

  return (
    <View style={LayoutStyles.container}>
      <Text style={TypographyStyles.h1}>User profile</Text>
      <Text style={TypographyStyles.h2}>{userinfo.name}</Text>
      <Text style={TypographyStyles.h2}>From: {userinfo.school}</Text>
      <Text style={TypographyStyles.h2}>Lives in: {userinfo.city}</Text>
    </View>
  );
};

export default UserProfile;
