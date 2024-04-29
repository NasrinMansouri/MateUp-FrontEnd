import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";

import colors from "../../config/colors";
import CardChallenges from "./CardChallenges";

export default function GalleryAllChallenges({ AllChallenges }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>recommended for you</Text>
      </View>
      <FlatList
        data={AllChallenges}
        keyExtractor={(AllChallenges) => AllChallenges.id.toString()}
        renderItem={({ item }) => (
          <CardChallenges
            onPress={() => console.log("all challenge", item)}
            challengeImage={item.challengeImage}
            challengeName={item.challengeName}
            duration={item.duration}
            beginingDate={item.beginingDate}
            endingDate={item.endingDate}
            year={item.year}
            cardWidth="100%"
            marginBottom={50}
            borderWidth={0}
            cardHeight={284}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 96,
    marginBottom: 300,
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 26,
    color: colors.orangePrimary,
    marginBottom: 30,
    textTransform: "uppercase",
    paddingLeft: 16,
  },
});
