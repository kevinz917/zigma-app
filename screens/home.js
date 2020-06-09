import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// @refresh reset

const Homescreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Text> {count}</Text>

      <Button
        title="Details"
        onPress={() => {
          navigation.navigate("Details", { number: 100, name: "Hello" });
        }}
      ></Button>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "UPDATED" })}
      />
    </View>
  );
};

export default Homescreen;
