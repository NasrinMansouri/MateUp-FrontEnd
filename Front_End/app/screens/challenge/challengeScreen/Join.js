import React from "react";
import { StyleSheet, View } from "react-native";
import GalleryAllChallenges from "../../../components/challenge/GalleryAllChallenges";

import GalleryBuddiesJoinedChallenge from "../../../components/challenge/GalleryBuddiesJoinedChallenge";
import GalleryClubChallenge from "../../../components/challenge/GalleryClubChallenge";

const challengeYourBuddiesJoined = [
  {
    id: 1,
    challengeImage: require("../../../../assets/person-1.jpg"),
    challengeName: "Weekly Challenge",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,

    Buddies: [
      { id: 1, image: require("../../../../assets/person-1.jpg") },
      { id: 2, image: require("../../../../assets/person-1.jpg") },
      { id: 3, image: require("../../../../assets/person-1.jpg") },
      { id: 4, image: require("../../../../assets/person-1.jpg") },
      { id: 5, image: require("../../../../assets/person-1.jpg") },
      { id: 6, image: require("../../../../assets/person-1.jpg") },
      { id: 7, image: require("../../../../assets/person-1.jpg") },
    ],
  },
  {
    id: 2,
    challengeImage: require("../../../../assets/person-1.jpg"),
    challengeName: "Weekly Challenge",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,

    Buddies: [{ id: 1, image: require("../../../../assets/person-1.jpg") }],
  },
  {
    id: 3,
    challengeImage: require("../../../../assets/person-1.jpg"),
    challengeName: "Weekly Challenge",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,

    Buddies: [
      { id: 1, image: require("../../../../assets/person-1.jpg") },
      { id: 2, image: require("../../../../assets/person-1.jpg") },
      { id: 3, image: require("../../../../assets/person-1.jpg") },
      { id: 4, image: require("../../../../assets/person-1.jpg") },
      { id: 5, image: require("../../../../assets/person-1.jpg") },
    ],
  },
];

export default function Join() {
  return (
    <View style={styles.container}>
      <GalleryBuddiesJoinedChallenge
        BuddiesJoinedChallenge={challengeYourBuddiesJoined}
      />
      <GalleryClubChallenge ClubChallenge={challengeYourBuddiesJoined} />
      <GalleryAllChallenges AllChallenges={challengeYourBuddiesJoined} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
