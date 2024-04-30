import React from "react";
import { StyleSheet, View } from "react-native";

import AppTextInput from "../AppTextInput";
import colors from "../../config/colors";
import Like from "./Like";

export default function AddReactions() {
  return (
    <View style={styles.container}>
      <View style={styles.commentContainer}>
        <AppTextInput
          placeholder="Add a comment..."
          multiline
          maxLength={700}
          numberOfLines={9}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <Like />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  commentContainer: {
    flex: 1,
  },
});
