import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../../config/colors";

export default function ShowReactions({ NumberOfReactions, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {title}({NumberOfReactions})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "nunitoSans-regular",
    fontSize: 16,
    color: colors.white,
    textTransform: "capitalize",
  },
});
