import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../screens/signup/landing";
import Info1 from "../screens/signup/info1";
import Info2 from "../screens/signup/info2";
import Greeting from "../screens/signup/greeting";

//import login stack
import LoginLanding from "./login";

// @refresh reset

const Stack = createStackNavigator();

const SignupStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Greeting"
        options={{
          title: "greeting",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
        component={Greeting}
      />
      <Stack.Screen
        name="LoginLanding"
        options={{
          title: "Login",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
        component={LoginLanding}
      />

      <Stack.Screen
        name="Login"
        options={{
          title: "Sign up",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
        component={Landing}
      />
      <Stack.Screen
        name="Info1"
        options={{
          title: "Password",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
        component={Info1}
      />
      <Stack.Screen
        name="Info2"
        options={{
          title: "Info",
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
        component={Info2}
      />
    </Stack.Navigator>
  );
};

export default SignupStack;
