import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import colors from "../../config/colors";
import Screen from "../../components/Screen";
import BulletPointWithText from "../../components/BulletPointWithText";
import ChallengeDescription from "../../components/challenge/ChallengeDescription";
import DonutChart from "../../components/challenge/DonutChart";
import Line from "../../components/Line";
import ShowReactions from "../../components/challenge/ShowReactions";
import AppTextInput from "../../components/AppTextInput";
import Like from "../../components/challenge/Like";
import AddReactions from "../../components/challenge/AddReactions";

export default function JoinedChallnegeScreen({ challengeDetailsProgress }) {
  const {
    challengeImage,
    ChallengeName,
    challengeType,
    duration,
    startDate,
    endDate,
    year,
    challengeDescription,
    numberOfLikes,
    numberOfComments,
  } = challengeDetailsProgress;
  return (
    <Screen>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={challengeImage} style={styles.image} />
        <Text style={styles.name}>{ChallengeName}</Text>
        <View style={styles.typeContainer}>
          <BulletPointWithText
            title={challengeType}
            width={5}
            height={5}
            borderRadius={5 / 2}
            bulletColor={colors.orangePrimary}
            marginRight={4}
            textColor={colors.white}
            fontFamily="nunitoSans-bold"
            textTransform={"uppercase"}
            fontSize={16}
          />
        </View>
        <Text style={styles.durationDate}>{duration}</Text>
        <Text style={styles.durationDate}>
          {startDate} {endDate}, {year}
        </Text>
        <ChallengeDescription
          challengeDescription={challengeDescription}
          marginTop={40}
        />
        <View style={styles.progressHeader}>
          <Text style={styles.header1}>PROGRESS</Text>
          <TouchableOpacity onPress={() => console.log("details tapped")}>
            <Text style={styles.header2}>DETAILS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.donutContainer}>
          <DonutChart />
        </View>
        <Line marginBottom={20} marginTop={40} />
        <ShowReactions NumberOfReactions={numberOfLikes} title={"Likes"} />
        <Line marginBottom={20} marginTop={20} />
        <ShowReactions
          NumberOfReactions={numberOfComments}
          title={"Comments"}
        />
        <Line
          marginBottom={20}
          marginTop={20}
          backgroundColor={colors.blackBc}
        />
        {/* <AppTextInput
          placeholder="Add a comment..."
          multiline
          maxLength={500}
          numberOfLines={7}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Like /> */}
        {/* <AddReactions /> */}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
  image: {
    width: 78,
    height: 78,
    borderRadius: 78 / 2,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 67,
    marginTop: 40,
  },
  name: {
    fontFamily: "montserrat-black",
    fontSize: 20,
    color: colors.white,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  typeContainer: {
    marginBottom: 10,
  },
  durationDate: {
    fontFamily: "montserrat-black",
    fontSize: 16,
    color: colors.orangePrimary,
    textTransform: "capitalize",
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  header1: {
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    fontSize: 20,
    textTransform: "uppercase",
  },
  header2: {
    fontFamily: "montserrat-black",
    color: colors.white,
    fontSize: 12,
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
  donutContainer: {
    marginTop: 30,
  },
});
