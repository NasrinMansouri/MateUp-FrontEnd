import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import AppButton from "../../../components/AppButton";
import GalleryChallengeByMe from "../../../components/challenge/GalleryChallengeByMe";
import GalleryJoinedChallenge from "../../../components/challenge/GalleryJoinedChallenge";

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

export default function MyChallenges({ onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
          <AppButton title="create a Challenge" fontSize={14} />
        </TouchableOpacity>
      </View>
      <View style={styles.title1Container}>
        <GalleryJoinedChallenge
          header={"Joined Challenges"}
          joinedChallenge={joinedChallengeData}
        />
      </View>
      <View style={styles.title2Container}>
        <GalleryChallengeByMe
          header={"Challenges by me"}
          challengeByMe={joinedChallengeData}
        />
      </View>
    </View>
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
