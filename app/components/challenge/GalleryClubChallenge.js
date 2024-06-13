import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import CardChallenges from "./CardChallenges";

export default function GalleryClubChallenge({
  ClubChallenge,
  onPress,
  onPressJoin,
  // loading,
}) {
  const navigation = useNavigation();

  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size="large" color={colors.orangeSecondary} />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>at your club</Text>
      </View>
      <FlatList
        style={styles.container}
        horizontal
        data={ClubChallenge}
        keyExtractor={(challenges) => challenges.id.toString()}
        renderItem={({ item }) => (
          <CardChallenges
            onPressCard={() => onPress(item)}
            onPressBtn={() => onPressJoin(item)}
            challengeImage={{uri: item.challenge_image_url}}
            challengeName={item.name}
            duration={item.time_based}
            beginingDate={item.start_date}
            endingDate={item.end_date}
            //year={item.year}
            cardHeight={284}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 68,
  },
  container: {
    paddingLeft: 16,
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 26,
    color: colors.orangePrimary,
    marginBottom: 10,
    textTransform: "uppercase",
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
