import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CardJoinedChallenge from "./CardJoinedChallenge";
import colors from "../../config/colors";

export default function GalleryChallengeByMe({
  challengeByMe,
  header,
  onPress,
  // loading,
  fontSize = 26,
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
      {header && (
        <Text style={[styles.title, { fontSize: fontSize }]}>{header}</Text>
      )}
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        horizontal
        data={challengeByMe}
        initialNumToRender={challengeByMe && challengeByMe.length > 0 ? challengeByMe.length : undefined}
        keyExtractor={(challenges) => challenges.id.toString()}
        renderItem={({ item }) => (
          <CardJoinedChallenge
            onPress={() => onPress(item)}
            challenegImage={{uri: item.challenegImage}}
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
  container: {
    // paddingTop: 16,
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
