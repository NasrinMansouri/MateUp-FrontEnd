import React, { useEffect } from "react";
import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

import GalleryAllChallenges from "../../../components/challenge/GalleryAllChallenges";
import GalleryBuddiesJoinedChallenge from "../../../components/challenge/GalleryBuddiesJoinedChallenge";
import GalleryClubChallenge from "../../../components/challenge/GalleryClubChallenge";
import GalleryFilters from "../../../components/challenge/GalleryFilters";
import Screen from "../../../components/Screen";
import useApi from "../../../hooks/useApi";
import challengeApi from "../../../api/challenge";

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
  // for backend connection using hooks
  // const getChallengeYourBuddiesJoinedApi = useApi(
  //   challengeApi.getBuddiesJoinedChallenges
  // );
  // const getClubChallengesApi = useApi(challengeApi.getClubChallenges);
  // const getAllChallengesApi = useApi(challengeApi.getAllChallenges);
  // useEffect(() => {
  //   getChallengeYourBuddiesJoinedApi.request();
  //   getClubChallengesApi.request();
  //   getAllChallengesApi.request();
  // }, []);

  //for backend connection

  // const [BuddiesJoinedChallenge, setBuddiesJoinedChallenge] = useState([]);
  // const [ClubChallenge, setClubChallenge] = useState([]);
  // const [AllChallenges, setAllChallenges] = useState([]);

  // useEffect(() => {
  //   loadBuddiesJoinedChallenge();
  //   loadClubChallenge();
  //   loadAllChallenges();
  // }, []);

  // const loadBuddiesJoinedChallenge = async () => {
  //   const response = await challengeApi.getBuddiesJoinedChallenges();
  //   setBuddiesJoinedChallenge(response.data.challenges);
  // };
  // const loadClubChallenge = async () => {
  //   const response = await challengeApi.getClubChallenges();
  //   setClubChallenge(response.data.challenges);
  // };
  // const loadAllChallenges = async () => {
  //   const response = await challengeApi.getAllChallenges();
  //   setAllChallenges(response.data.challenges);
  // };

  const navigation = useNavigation();

  const renderItemCache = {
    GalleryBuddiesJoinedChallenge: () => (
      <GalleryBuddiesJoinedChallenge
        BuddiesJoinedChallenge={challengeYourBuddiesJoined}
        // BuddiesJoinedChallenge={getChallengeYourBuddiesJoinedApi.data}
        // loading={getChallengeYourBuddiesJoinedApi.loading}
        // error={getChallengeYourBuddiesJoinedApi.error}
        onPress={(item) =>
          navigation.navigate("ChallengeDetails", {
            challengeId: item.id,
            showBuddies: true,
          })
        }
        onPressJoin={(item) =>
          navigation.navigate("JoinedChallenge", { challengeId: item.id })
        }
      />
    ),
    GalleryClubChallenge: () => (
      <GalleryClubChallenge
        ClubChallenge={challengeYourBuddiesJoined}
        // ClubChallenge={getClubChallengesApi.data}
        // loading={getClubChallengesApi.loading}
        // error={getClubChallengesApi.error}
        onPress={(item) =>
          navigation.navigate("ChallengeDetails", {
            challengeId: item.id,
            showBuddies: false,
          })
        }
        onPressJoin={(item) =>
          navigation.navigate("JoinedChallenge", { challengeId: item.id })
        }
      />
    ),

    GalleryAllChallenges: () => (
      <GalleryAllChallenges
        AllChallenges={challengeYourBuddiesJoined}
        // AllChallenges={getAllChallengesApi.data}
        // loading={getAllChallengesApi.loading}
        // error={getAllChallengesApi.error}
        onPress={(item) =>
          navigation.navigate("ChallengeDetails", {
            challengeId: item.id,
            showBuddies: false,
          })
        }
        onPressJoin={(item) =>
          navigation.navigate("JoinedChallenge", { challengeId: item.id })
        }
      />
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
