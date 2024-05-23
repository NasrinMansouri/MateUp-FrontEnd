import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Screen from "../../components/Screen";

import colors from "../../config/colors";

export default function Calendar() {
  return (
    <Screen style={styles.container}>
      <View>
        <Text
          style={{
            color: colors.green,
            fontSize: 20,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            textTransform: "capitalize",
            fontFamily: "montserrat-black",
          }}
        >
          Calendar in progress...
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
    flex: 1,
    justifyContent: "center",
  },
});
