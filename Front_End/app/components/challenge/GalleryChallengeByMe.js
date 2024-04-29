import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import CardJoinedChallenge from "./CardJoinedChallenge";
import colors from "../../config/colors";

export default function GalleryChallengeByMe({
  challengeByMe,
  header,
  fontSize = 26,
}) {
  return (
    <View style={styles.mainContainer}>
      {header && (
        <Text style={[styles.title, { fontSize: fontSize }]}>{header}</Text>
      )}
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        horizontal
        data={challengeByMe}
        keyExtractor={(challengeByMe) => challengeByMe.id.toString()}
        renderItem={({ item }) => (
          <CardJoinedChallenge
            onPress={() => console.log("my buddies challenge", item)}
            challenegImage={item.challenegImage}
            challengeName={item.challengeName}
            challengeGoal={item.challengeGoal}
            startDate={item.startDate}
            endDate={item.endDate}
            year={item.year}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
  },
  title: {
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    marginBottom: 10,
    textTransform: "uppercase",
    paddingLeft: 16,
  },
});
