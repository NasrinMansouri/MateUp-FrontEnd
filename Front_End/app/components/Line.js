import { StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../config/colors";

export default function Line({
  width = "100%",
  marginBottom,
  marginTop,
  backgroundColor = colors.black,
}) {
  return (
    <View
      style={[
        styles.line,
        {
          width: width,
          marginBottom: marginBottom,
          marginTop: marginTop,
          backgroundColor: backgroundColor,
        },
      ]}
    ></View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
