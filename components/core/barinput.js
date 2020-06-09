import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

const BarInput = (props) => {
  return (
    <TextInput
      style={{
        height: 50,
        backgroundColor: "#333333",
        borderRadius: 5,
        color: "white",
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 17,
        marginTop: 16,
        marginBottom: 10,
      }}
      placeholderTextColor="#787878"
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default BarInput;
