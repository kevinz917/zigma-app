import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Join from "../screens/main/join";

// @refresh reset

const Stack = createStackNavigator();

const LoginStack = () => {
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
        component={Join}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
