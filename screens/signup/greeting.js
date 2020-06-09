import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { PrimaryButton, SecondaryButton } from "../../components/core/button";
import LayoutStyles from "../../styles/core/layout";
import BarInput from "../../components/core/barinput";
import TypographyStyles from "../../styles/core/typography";

//LoginLanding stack

const Greeting = ({ navigation }) => {
  return (
    <View style={LayoutStyles.container}>
      <Text style={TypographyStyles.h1}>Welcome to Zigma</Text>
      <PrimaryButton
        title="Get started"
        onPress={() => navigation.navigate("Login")}
        style={{ marginBottom: 0, marginTop: 400 }}
      />
      <SecondaryButton
        title="Sign in"
        onPress={() => navigation.navigate("LoginLanding")}
        style={{ marginBottom: 40 }}
      />
    </View>
  );
};

export default Greeting;
