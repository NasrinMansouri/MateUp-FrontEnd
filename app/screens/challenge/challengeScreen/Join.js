import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import GalleryAllChallenges from "../../../components/challenge/GalleryAllChallenges";
import GalleryBuddiesJoinedChallenge from "../../../components/challenge/GalleryBuddiesJoinedChallenge";
import GalleryClubChallenge from "../../../components/challenge/GalleryClubChallenge";
import GalleryFilters from "../../../components/challenge/GalleryFilters";
import Screen from "../../../components/Screen";
import useApi from "../../../hooks/useApi";
import challengeApi from "../../../api/challenge";
import { getFromAsyncStorage } from "../../../auth/asyncStorage";

export default function Join({}) {
  // for backend connection
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

  const navigation = useNavigation();
  const [memberId, setMemberId] = useState(0);
  const [clubChallenges, setClubChallenges] = useState([]);

  // Load memberId from AsyncStorage
  const loadMemberId = async () => {
    try {
      const memberId = await getFromAsyncStorage("memberId");
      setMemberId(memberId);
    } catch (error) {
      console.error("Error loading memberId:", error);
    }
  };

  useEffect(() => {
    // Load memberId
    loadMemberId();
    // if memberId exists, load buddies
    if (memberId) {
      loadClubChallenges(memberId);
    }
  }, [memberId]);

  const loadClubChallenges = async () => {
    try {
      const response = await challengeApi.getClubChallenges(memberId);
      console.log("response.data", response.data);
      setClubChallenges(response.data.challenges);
    } catch (error) {
      console.error("Error loading challenges:", error);
    }
  };

  const renderItemCache = {
    GalleryBuddiesJoinedChallenge: () => (
      <GalleryBuddiesJoinedChallenge
        BuddiesJoinedChallenge={challengeYourBuddiesJoined}
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
        ClubChallenge={clubChallenges}
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
        initialNumToRender={data && data.length > 0 ? data.length : undefined}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => renderItemCache[item.type](item.data)}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const challengeYourBuddiesJoined = [
  {
    id: 1,
    challengeImage: require("../../../../assets/person5.jpg"),
    challengeName: "Strength Stride Series",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,

    Buddies: [
      { id: 1, image: require("../../../../assets/person4.jpg") },
      { id: 2, image: require("../../../../assets/person2.jpg") },
      { id: 3, image: require("../../../../assets/person3.jpg") },
      { id: 4, image: require("../../../../assets/person5.jpg") },
      { id: 5, image: require("../../../../assets/person-1.jpg") },
      { id: 6, image: require("../../../../assets/person4.jpg") },
      { id: 7, image: require("../../../../assets/person2.jpg") },
    ],
  },
  {
    id: 2,
    challengeImage: require("../../../../assets/person3.jpg"),
    challengeName: "Muscle Power Marathon",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,

    Buddies: [{ id: 1, image: require("../../../../assets/person-1.jpg") }],
  },
  {
    id: 3,
    challengeImage: require("../../../../assets/person2.jpg"),
    challengeName: "Vitality Sprint quest",
    duration: "7 Hours",
    beginingDate: "AGU 3",
    endingDate: "sep 3",
    year: 2024,

    Buddies: [
      { id: 1, image: require("../../../../assets/person-1.jpg") },
      { id: 2, image: require("../../../../assets/person2.jpg") },
      { id: 3, image: require("../../../../assets/person3.jpg") },
      { id: 4, image: require("../../../../assets/person4.jpg") },
      { id: 5, image: require("../../../../assets/person5.jpg") },
    ],
  },
];
