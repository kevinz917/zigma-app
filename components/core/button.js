import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import TypographyStyles from "../../styles/core/typography";

const PrimaryButton = (props) => {
  const { title = "Enter", style = {}, textStyle = {}, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.PrimaryButton, style]}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const SecondaryButton = (props) => {
  const { title = "Enter", style = {}, textStyle = {}, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.SecondaryButton, style]}>
      <Text style={[styles.SecondaryText, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  PrimaryButton: {
    marginTop: 20,
    display: "flex",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#567BFF",
    // shadowColor: "#2AC062",
    // shadowOpacity: 0.4,
    // shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
  },

  SecondaryButton: {
    marginTop: 20,
    display: "flex",
    height: 50,

    color: "#567BFF",

    borderRadius: 25,
    borderWidth: 2,
    // borderStyle: "solid",
    borderColor: "#567BFF",
    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "#567BFF",
    shadowRadius: 20,
  },

  text: {
    fontSize: 17,
    fontWeight: "700",
    // textTransform: "uppercase",
    color: "#FFFFFF",
  },

  SecondaryText: {
    fontSize: 17,
    fontWeight: "700",
    // textTransform: "uppercase",
    color: "#567BFF",
  },
});

export { PrimaryButton, SecondaryButton };
