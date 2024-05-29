import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import GalleryAllChallenges from "../../../components/challenge/GalleryAllChallenges";
import GalleryBuddiesJoinedChallenge from "../../../components/challenge/GalleryBuddiesJoinedChallenge";
import GalleryClubChallenge from "../../../components/challenge/GalleryClubChallenge";
import GalleryFilters from "../../../components/challenge/GalleryFilters";
import Screen from "../../../components/Screen";

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

export default function Join({}) {
  const renderItemCache = {
    GalleryBuddiesJoinedChallenge: (challengeYourBuddiesJoined) => (
      <GalleryBuddiesJoinedChallenge
        BuddiesJoinedChallenge={challengeYourBuddiesJoined}
      />
    ),
    GalleryClubChallenge: (challengeYourBuddiesJoined) => (
      <GalleryClubChallenge ClubChallenge={challengeYourBuddiesJoined} />
    ),
    GalleryAllChallenges: (challengeYourBuddiesJoined) => (
      <GalleryAllChallenges AllChallenges={challengeYourBuddiesJoined} />
    ),

    GalleryFilters: () => <GalleryFilters />,
  };

  const data = [
    { type: "GalleryFilters" },
    { type: "GalleryBuddiesJoinedChallenge", data: challengeYourBuddiesJoined },
    { type: "GalleryClubChallenge", data: challengeYourBuddiesJoined },
    { type: "GalleryAllChallenges", data: challengeYourBuddiesJoined },
  ];

  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => renderItemCache[item.type](item.data)}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
