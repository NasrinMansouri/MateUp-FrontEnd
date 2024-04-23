import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import colors from "../../config/colors";
import BulletPointWithText from "../BulletPointWithText";

export default function CardJoinedChallenge({
  challenegImage,
  challengeName,
  challengeGoal,
  startDate,
  endDate,
  year,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={styles.container}>
        <View>
          <Image source={challenegImage} style={styles.image} />
        </View>
        <View style={styles.bulletContainer}>
          <BulletPointWithText
            title={challengeName}
            bulletColor={colors.orangePrimary}
            width={5}
            height={5}
            borderRadius={5 / 2}
            marginRight={4}
            marginBottom={4}
            textColor={colors.white}
            fontFamily="nunitoSans-extraBold"
            textTransform={"uppercase"}
            fontSize={12}
          />
        </View>
        <View>
          <Text style={styles.text}>{challengeGoal}</Text>
          <Text style={styles.text}>
            {startDate} to {endDate}, {year}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 194,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.black,
  },
  image: {
    width: 78,
    height: 78,
    borderRadius: 78 / 2,
  },
  bulletContainer: {
    marginTop: 16,
    marginBottom: 14,
    paddingRight: 10,
    paddingLeft: 10,
  },
  text: {
    color: colors.grayLight50,
    fontSize: 14,
    textTransform: "capitalize",
    alignSelf: "center",
  },
});
