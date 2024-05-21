import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../config/colors";

function ListItemSeparator({ backgroundColor = colors.black }) {
  return (
    <View style={[styles.separator, { backgroundColor: backgroundColor }]} />
  );
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    // backgroundColor: colors.grayLight50,
  },
});

export default ListItemSeparator;
