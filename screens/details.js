import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

const Details = ({ route, navigation }) => {
  const { number } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Details</Text>
      <Text>{JSON.stringify(number)}</Text>
      <Button
        title="Next details"
        onPress={() =>
          navigation.push("Details", {
            number: number + 1,
            name: "Number " + number,
          })
        }
      ></Button>
      <Button title="Go Home" onPress={() => navigation.popToTop()}></Button>
    </View>
  );
};

export default Details;
