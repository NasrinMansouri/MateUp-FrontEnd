import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import colors from "../config/colors";

function AppButtonIcon({ title, onPress, image }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.button}
      onPress={onPress}
    >
      {image && <Image source={image} style={styles.image} />}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    width: 146,
    height: 56,
    borderRadius: 51,
    borderWidth: 1,
    borderColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: colors.orangeSecondary,
    textTransform: "uppercase",
    fontFamily: "montserrat-black",
  },
  image: {
    marginRight: 12,
  },
});

export default AppButtonIcon;

//to be used in screen as:
{
  /* <AppButtonBorder
title="join"
image={require("./assets/icons/calendar.png")}
onPress={() => console.log("tapped")}
/> */
}
