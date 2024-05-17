import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

export default function ChallengeDescription({
  challengeDescription,
  marginBottom,
  marginTop,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <View
        style={[
          styles.descriptionContainer,
          { marginBottom: marginBottom, marginTop: marginTop },
        ]}
      >
        <Text
          style={styles.description}
          numberOfLines={expanded ? undefined : 3}
        >
          {challengeDescription}
        </Text>
      </View>
      {challengeDescription.length > 150 && (
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.moreAsText}>{expanded ? "less" : "more"}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    fontFamily: "nunitoSans-regular",
    color: colors.white,
  },
  moreAsText: {
    fontSize: 16,
    fontFamily: "nunitoSans-extraBold",
    color: colors.green,
    marginBottom: 40,
  },
});
