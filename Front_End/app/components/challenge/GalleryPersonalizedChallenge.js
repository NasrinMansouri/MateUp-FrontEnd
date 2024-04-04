import { StyleSheet, FlatList } from "react-native";
import React from "react";
import CardChallenges from "./CardChallenges";

export default function GalleryPersonalizedChallenge({
  PersonalizedChallenge,
}) {
  return (
    <FlatList
      style={styles.container}
      horizontal
      data={PersonalizedChallenge}
      keyExtractor={(PersonalizedChallenge) =>
        PersonalizedChallenge.id.toString()
      }
      renderItem={({ item }) => (
        <CardChallenges
          image={item.image}
          challengeName={item.challengeName}
          duration={item.duration}
          beginingDate={item.beginingDate}
          endingDate={item.endingDate}
          year={item.year}
          onPress={item.onPress}
          Buddies={item.Buddies}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
  },
});
