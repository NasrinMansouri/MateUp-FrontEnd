import { StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../config/colors";

export default function Line({ width = "100%", marginBottom }) {
  return (
    <View
      style={[styles.line, { width: width, marginBottom: marginBottom }]}
    ></View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
