import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Room from "../screens/main/room";

import LoginLanding from "../screens/login/loginlanding";

import UserProfile from "../screens/main/userprofile";

// @refresh reset

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginLanding"
        options={{
          title: "Room",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
        component={LoginLanding}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
