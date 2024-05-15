import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableHighlight } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function MenueList({ onPress, title, name }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.9}
        underlayColor={colors.grayLight50}
      >
        <View style={styles.containerBox}>
          <Feather name={name} size={24} color={colors.green} />
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  containerBox: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
    height: 70,
    backgroundColor: colors.black,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "nunitoSans-regular",
  },
});
