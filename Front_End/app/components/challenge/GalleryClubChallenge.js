import { StyleSheet, FlatList } from "react-native";
import React from "react";

import CardChallenges from "./CardChallenges";

export default function GalleryClubChallenge({ ClubChallenge }) {
  return (
    <FlatList
      style={styles.container}
      horizontal
      data={ClubChallenge}
      keyExtractor={(ClubChallenge) => ClubChallenge.id.toString()}
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
          cardHeight={284}
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

// to be used in screen as:
{
  /* <GalleryClubChallenge ClubChallenge={challengeAtYourClub} /> */
}

//dummy data
// const challengeAtYourClub = [
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
//   },
// ];
