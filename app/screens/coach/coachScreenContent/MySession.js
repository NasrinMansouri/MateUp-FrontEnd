import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../../../config/colors";

export default function MySession() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>You have not booked any session yet!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 16,
    color: colors.grayLight100,
    marginBottom: 10,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
