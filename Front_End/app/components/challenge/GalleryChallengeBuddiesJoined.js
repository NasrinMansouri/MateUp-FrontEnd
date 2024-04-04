import { StyleSheet, FlatList } from "react-native";
import React from "react";
import CardChallengBuddiesJoined from "./CardChallengBuddiesJoined";

export default function GalleryChallengeBuddiesJoined({
  ChallengeBuddiesJoined,
}) {
  return (
    <FlatList
      style={styles.container}
      horizontal
      data={ChallengeBuddiesJoined}
      keyExtractor={(ChallengeBuddiesJoined) =>
        ChallengeBuddiesJoined.id.toString()
      }
      renderItem={({ item }) => (
        <CardChallengBuddiesJoined
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
