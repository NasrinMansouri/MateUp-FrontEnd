import React from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppButton from "../../../components/AppButton";
import GalleryChallengeByMe from "../../../components/challenge/GalleryChallengeByMe";
import GalleryJoinedChallenge from "../../../components/challenge/GalleryJoinedChallenge";
import Screen from "../../../components/Screen";

joinedChallengeData = [
  {
    id: 1,
    challenegImage: require("../../../../assets/person2.jpg"),
    challengeName: "Cardio Boost Challenge",
    challengeGoal: "15 Hours",
    startDate: "Aug 3",
    endDate: "Aug 4",
    year: "2022",
    time: "10:00 AM",
  },
  {
    id: 2,
    challenegImage: require("../../../../assets/person2.jpg"),
    challengeName: "Cardio Boost Challenge",
    challengeGoal: "15 Hours",
    startDate: "Aug 3",
    endDate: "Aug 4",
    year: "2022",
    time: "10:00 AM",
  },
];

export default function MyChallenges({}) {
  const navigation = useNavigation();

  const renderItemCache = {
    CreateAChallenge: () => (
      <View style={styles.btnContainer}>
        <AppButton
          title="create a Challenge"
          fontSize={14}
          onPress={() => {
            navigation.navigate("CreateChallenge");
            console.log("create a Challenge");
          }}
        />
      </View>
    ),
    GalleryJoinedChallenge: (joinedChallengeData) => (
      <View style={styles.title1Container}>
        <GalleryJoinedChallenge
          joinedChallenge={joinedChallengeData}
          header={"Joined Challenges"}
        />
      </View>
    ),
    GalleryChallengeByMe: (joinedChallengeData) => (
      <View style={styles.title2Container}>
        <GalleryChallengeByMe
          challengeByMe={joinedChallengeData}
          header={"Challenges by me"}
        />
      </View>
    ),
  };

  const data = [
    { type: "CreateAChallenge" },
    { type: "GalleryJoinedChallenge", data: joinedChallengeData },
    { type: "GalleryChallengeByMe", data: joinedChallengeData },
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

const styles = StyleSheet.create({
  container: {},
  btnContainer: {
    marginTop: 40,
    marginRight: 16,
    marginLeft: 16,
  },
  title1Container: {
    marginTop: 60,
  },
  title2Container: {
    marginTop: 96,
    marginBottom: 300,
  },
});
