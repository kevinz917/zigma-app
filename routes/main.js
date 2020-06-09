import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Room from "../screens/main/room";

import UserProfile from "../screens/main/userprofile";
import JoinPage from "../screens/main/join";

// @refresh reset

const Stack = createStackNavigator();

const RoomStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JoinPage"
        options={{
          title: "JoinPage",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
        component={JoinPage}
      />
      <Stack.Screen
        name="Room"
        options={{
          title: "Room",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
        component={Room}
      />
      <Stack.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
        component={UserProfile}
      />
    </Stack.Navigator>
  );
};

export default RoomStack;
