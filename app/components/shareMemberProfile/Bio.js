import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../../config/colors";

export default function Bio({ bio }) {
  return (
    <View style={styles.container}>
      <Text style={styles.bio} numberOfLines={9}>
        {bio}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 22,
  },
  bio: {
    fontFamily: "nunitoSans-regular",
    color: colors.white,
    fontSize: 16,

    // lineHeight: 20,
    // textAlign: "center",
  },
});
