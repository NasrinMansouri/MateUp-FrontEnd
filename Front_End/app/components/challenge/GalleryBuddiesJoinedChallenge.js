import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";

import colors from "../../config/colors";
import CardChallenges from "./CardChallenges";

export default function GalleryBuddiesJoinedChallenge({
  BuddiesJoinedChallenge,
}) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>your buddies joined</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        horizontal
        data={BuddiesJoinedChallenge}
        keyExtractor={(BuddiesJoinedChallenge) =>
          BuddiesJoinedChallenge.id.toString()
        }
        renderItem={({ item }) => (
          <CardChallenges
            onPress={() => console.log("my buddies challenge", item)}
            image={item.image}
            challengeName={item.challengeName}
            duration={item.duration}
            beginingDate={item.beginingDate}
            endingDate={item.endingDate}
            year={item.year}
            Buddies={item.Buddies}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
  },
  titleContainer: {
    marginTop: 40,
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

{
  /* <GalleryBuddiesJoinedChallenge
BuddiesJoinedChallenge={challengeYourBuddiesJoined}
/> */
}
// const challengeYourBuddiesJoined = [
//   {
//     id: 1,
//     image: require("./assets/person-1.jpg"),
//     challengeName: "Weekly Challenge",
//     duration: "7 Hours",
//     beginingDate: "AGU 3",
//     endingDate: "sep 3",
//     year: 2024,
//     onPress: () => {
//       console.log("card pressed");
//     },
//     Buddies: [
//       { id: 1, image: require("./assets/person-1.jpg") },
//       { id: 2, image: require("./assets/person2.jpg") },
//       { id: 3, image: require("./assets/person2.jpg") },
//       { id: 4, image: require("./assets/person2.jpg") },
//       { id: 5, image: require("./assets/person2.jpg") },
//       { id: 6, image: require("./assets/person2.jpg") },
//       { id: 7, image: require("./assets/person2.jpg") },
//     ],
//   },
//   {
//     id: 2,
//     image: require("./assets/person-1.jpg"),
//     challengeName: "Weekly Challenge",
//     duration: "7 Hours",
//     beginingDate: "AGU 3",
//     endingDate: "sep 3",
//     year: 2024,
//     onPress: () => {
//       console.log("card pressed");
//     },
//     Buddies: [{ id: 1, image: require("./assets/person-1.jpg") }],
//   },
//   {
//     id: 3,
//     image: require("./assets/person-1.jpg"),
//     challengeName: "Weekly Challenge",
//     duration: "7 Hours",
//     beginingDate: "AGU 3",
//     endingDate: "sep 3",
//     year: 2024,
//     onPress: () => {
//       console.log("card pressed");
//     },
//     Buddies: [
//       { id: 1, image: require("./assets/person-1.jpg") },
//       { id: 2, image: require("./assets/person2.jpg") },
//       { id: 3, image: require("./assets/person2.jpg") },
//       { id: 4, image: require("./assets/person2.jpg") },
//       { id: 5, image: require("./assets/person2.jpg") },
//     ],
//   },
// ];
