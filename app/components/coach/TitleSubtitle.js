import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../../config/colors";

export default function TitleSubtitle({ title, subTitle }) {
  return (
    <View style={styles.rateContainer}>
      <Text style={styles.rateTitle}>{title}</Text>
      <Text style={styles.rateDetails}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rateContainer: {
    marginLeft: 16,
    marginRight: 16,
  },
  rateTitle: {
    color: colors.orangePrimary,
    fontFamily: "montserrat-black",
    fontSize: 26,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  rateDetails: {
    color: colors.white,
    fontFamily: "nunitoSans-extraBold",
    fontSize: 16,
    textTransform: "capitalize",
  },
});
