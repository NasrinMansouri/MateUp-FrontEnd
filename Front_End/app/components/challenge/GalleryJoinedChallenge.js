import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import CardJoinedChallenge from "./CardJoinedChallenge";
import colors from "../../config/colors";

export default function GalleryJoinedChallenge({
  joinedChallenge,
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
        data={joinedChallenge}
        keyExtractor={(joinedChallenge) => joinedChallenge.id.toString()}
        renderItem={({ item }) => (
          <CardJoinedChallenge
            challenegImage={item.challenegImage}
            challengeName={item.challengeName}
            challengeGoal={item.challengeGoal}
            startDate={item.startDate}
            endDate={item.endDate}
            year={item.year}
            onPress={item.onPress}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  //   mainContainer: {
  //     marginTop: 96,
  //   },
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
