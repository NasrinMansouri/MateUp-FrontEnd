import React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";

import AppButton from "../../components/AppButton";
import BulletPointWithText from "../../components/BulletPointWithText";
import ChallengeDescription from "../../components/challenge/ChallengeDescription";
import colors from "../../config/colors";
import CardProfile from "../../components/CardProfile";
import Screen from "../../components/Screen";

export default function DetailsChallengeScreen({ challengeDetails, onPress }) {
  const {
    challengeImage,
    ChallengeName,
    challengeType,
    duration,
    startDate,
    endDate,
    year,
    challengeDescription,
    numberOfMembers,
    yourBuddies,
  } = challengeDetails;
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
        {yourBuddies && (
          <View>
            <Text style={styles.yourBuddies}>YOUR BUDDIES</Text>
            <View style={styles.buddiesContainer}>
              {yourBuddies.map((buddy, id) => (
                <CardProfile
                  key={id}
                  name={buddy.name}
                  image={buddy.image}
                  onPress={() => console.log("tapped")}
                  flexDirection={"row"}
                  cardWidth={"100%"}
                  imageHeight={52}
                  imageWidth={52}
                  imageRadius={52 / 2}
                  fontSize={14}
                  textColor={colors.white}
                  fontFamily="nunitoSans-regular"
                  marginBottom={10}
                  justifyContent={"flex-start"}
                />
              ))}
            </View>
          </View>
        )}
        <Text style={styles.membersNumber}>
          {numberOfMembers} members have already joined!
        </Text>
      </ScrollView>
      <View style={styles.button}>
        <AppButton title="Join" fontSize={14} onPress={onPress} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    marginLeft: 16,
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
    textTransform: "capitalize",
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
  membersNumber: {
    fontFamily: "nunitoSans-regular",
    fontSize: 16,
    color: colors.grayLight50,
    marginBottom: 300,
  },
  yourBuddies: {
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    fontSize: 14,
  },
  buddiesContainer: {
    marginTop: 10,
    marginBottom: 40,
  },
  button: {
    position: "absolute",
    bottom: 100,
    right: 16,
    left: 16,
  },
});
