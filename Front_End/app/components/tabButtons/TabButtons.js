import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

import colors from "../../config/colors";

export default function TabButton({ text, active, onPress }) {
  return (
    <TouchableWithoutFeedback activeOpacity={0.9} onPress={onPress}>
      <View style={[styles.btn, active && styles.activeBtn]}>
        <Text style={[styles.text, active && styles.activeText]}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.grayLight50,
  },
  activeBtn: {
    borderBottomColor: colors.green,
  },
  text: {
    color: colors.grayLight50,
    fontFamily: "montserrat-black",
    fontSize: 14,
    textTransform: "uppercase",
  },
  activeText: {
    color: colors.green,
  },
});
