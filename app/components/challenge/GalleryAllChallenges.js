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

export default function GalleryAllChallenges({
  AllChallenges,
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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>recommended for you</Text>
      </View>
      <FlatList
        data={AllChallenges}
        keyExtractor={(challenges) => challenges.id.toString()}
        renderItem={({ item }) => (
          <CardChallenges
            onPressCard={() => onPress(item)}
            onPressBtn={() => onPressJoin(item)}
            challengeImage={item.challengeImage}
            challengeName={item.challengeName}
            duration={item.duration}
            beginingDate={item.beginingDate}
            endingDate={item.endingDate}
            year={item.year}
            cardWidth="100%"
            marginBottom={50}
            borderWidth={0}
            cardHeight={284}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 68,
    marginBottom: 300,
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
