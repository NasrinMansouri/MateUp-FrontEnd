import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import colors from "../config/colors";

function AppButton({ title, image, height = 45, width = "100%", onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { height: height, width: width }]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {image && <Image source={image} style={styles.image} />}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    flexDirection: "row",
    // width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontFamily: "montserrat-black",
  },
  image: {
    marginRight: 5,
  },
});

export default AppButton;

//to be used in screen as:
//here using 2 buttons horizontally
{
  /* <View
style={{
  flexDirection: "row",
  justifyContent: "space-between",
  margin: 16,
}}
>
<AppButton
  title="join"
  image={require("./assets/calendar.png")}
  width={168}
  height={32}
  onPress={() => console.log("tapped")}
/>
<AppButton
  title="join"
  width={168}
  height={32}
  onPress={() => console.log("tapped")}
/>
</View> */
}
