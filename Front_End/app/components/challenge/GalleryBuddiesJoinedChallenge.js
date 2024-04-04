import { StyleSheet, FlatList } from "react-native";
import React from "react";
import CardChallenges from "./CardChallenges";

export default function GalleryBuddiesJoinedChallenge({
  BuddiesJoinedChallenge,
}) {
  return (
    <FlatList
      style={styles.container}
      horizontal
      data={BuddiesJoinedChallenge}
      keyExtractor={(BuddiesJoinedChallenge) =>
        BuddiesJoinedChallenge.id.toString()
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
