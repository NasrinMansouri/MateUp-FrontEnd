import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CardJoinedChallenge from "../challenge/CardJoinedChallenge";
import colors from "../../config/colors";

const joinedChallenge = [
  {
    id: 1,
    challenegImage: require("../../../assets/person2.jpg"),
    challengeName: "Cardio Boost Challenge",
    challengeGoal: "15 Hours",
    startDate: "Aug 3",
    endDate: "Aug 4",
    year: "2022",
    time: "10:00 AM",
  },
  {
    id: 2,
    challenegImage: require("../../../assets/person3.jpg"),
    challengeName: "HIIT Power Journey",
    challengeGoal: "15 Hours",
    startDate: "Aug 3",
    endDate: "Aug 4",
    year: "2022",
    time: "10:00 AM",
  },
  {
    id: 3,
    challenegImage: require("../../../assets/person3.jpg"),
    challengeName: "Core Strength Blitz",
    challengeGoal: "15 Hours",
    startDate: "Aug 3",
    endDate: "Aug 4",
    year: "2022",
    time: "10:00 AM",
  },
  {
    id: 4,
    challenegImage: require("../../../assets/person5.jpg"),
    challengeName: "Muscle Gain Quest",
    challengeGoal: "15 Hours",
    startDate: "Aug 3",
    endDate: "Aug 4",
    year: "2022",
    time: "10:00 AM",
  },
];
export default function GalleryMemberJoinedChallenges({
  header,
  loading,
  fontSize = 26,
}) {
  const navigation = useNavigation();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.orangeSecondary} />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      {header && (
        <Text style={[styles.title, { fontSize: fontSize }]}>{header}</Text>
      )}
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        horizontal
        data={joinedChallenge}
        initialNumToRender={
          joinedChallenge && joinedChallenge.length > 0
            ? joinedChallenge.length
            : undefined
        }
        keyExtractor={(challenges) => challenges.id.toString()}
        renderItem={({ item }) => (
          <CardJoinedChallenge
            onPress={console.log("joined challene for member clicked", item.id)}
            challenegImage={item.challenegImage}
            challengeName={item.challengeName}
            challengeGoal={item.challengeGoal}
            startDate={item.startDate}
            endDate={item.endDate}
            year={item.year}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  //   mainContainer: {
  //     marginTop: 96,
  //   },
  container: {
    paddingTop: 16,
    paddingLeft: 16,
  },
  title: {
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    marginBottom: 10,
    textTransform: "uppercase",
    paddingLeft: 16,
  },
});
