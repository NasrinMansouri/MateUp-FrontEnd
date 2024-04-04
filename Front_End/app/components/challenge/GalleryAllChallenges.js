import { StyleSheet, FlatList } from "react-native";
import React from "react";

import CardChallenges from "./CardChallenges";

export default function GalleryAllChallenges({ AllChallenges }) {
  return (
    <FlatList
      style={styles.container}
      data={AllChallenges}
      keyExtractor={(AllChallenges) => AllChallenges.id.toString()}
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
          cardWidth="100%"
          marginBottom={50}
          borderWidth={0}
          cardHeight={284}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
