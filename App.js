import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "./screens/home";
import Details from "./screens/details";

import Signup from "./routes/signup";
import RoomStack from "./routes/main";
import LoginStack from "./routes/login";
import Join from "./routes/join";

const Stack = createStackNavigator();

// @refresh reset

export default function App() {
  return (
    <NavigationContainer>
      <RoomStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
