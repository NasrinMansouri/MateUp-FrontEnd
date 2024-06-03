import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppButton from "../../../components/AppButton";
import GalleryChallengeByMe from "../../../components/challenge/GalleryChallengeByMe";
import GalleryJoinedChallenge from "../../../components/challenge/GalleryJoinedChallenge";
import Screen from "../../../components/Screen";
import useApi from "../../../hooks/useApi";
import challengeApi from "../../../api/challenge";

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
  // for backend connection
  // const getJoinedChallenge = useApi(challengeApi.getUserJoinedChallenges);
  // const getChallengeByMe = useApi(challengeApi.getChallengesByMe);
  // useEffect(() => {
  //   getJoinedChallenge.request();
  //   getChallengeByMe.request();
  // }, []);

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
          // joinedChallenge={getJoinedChallenge.data}
          // loading={getJoinedChallenge.loading}
          // error={getJoinedChallenge.error}
          header={"Joined Challenges"}
          onPress={(item) => {
            console.log("id from gallery join channge in mychallenge", item.id);
            navigation.navigate("JoinedChallenge", { challenegId: item.id });
          }}
        />
      </View>
    ),
    GalleryChallengeByMe: (joinedChallengeData) => (
      <View style={styles.title2Container}>
        <GalleryChallengeByMe
          challengeByMe={joinedChallengeData}
          // challengeByMe={getChallengeByMe.data}
          // loading={getChallengeByMe.loading}
          // error={getChallengeByMe.error}
          header={"Challenges by me"}
          onPress={(item) =>
            navigation.navigate("JoinedChallenge", { challengeId: item.id })
          }
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
    marginTop: 40,
  },
  title2Container: {
    marginTop: 68,
    marginBottom: 300,
  },
});
