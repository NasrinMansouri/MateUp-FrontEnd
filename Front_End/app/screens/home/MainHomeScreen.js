import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Line from "../../components/Line";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import GalleryBuddies from "../../components/GalleryBuddies";
import AppButtonBorder from "../../components/AppButtonBorder";
import UserNextWorkoutPlanning from "../../components/home/UserNextWorkoutPlanning";
import GalleryBuddiesWorkout from "../../components/home/GalleryBuddiesWorkout";
import GalleryPeopleYouMightKnow from "../../components/home/GalleryPeopleYouMightKnow";
import CardMeetTheMemberOfTheMonth from "../../components/home/CardMeetTheMemberOfTheMonth";
import GalleryEducationalContent from "../../components/home/GalleryEducationalContent";

export default function MainHomeScreen() {
  return (
    <View>
      <ScrollView>
        <Screen style={styles.container}>
          <GalleryBuddies style={{ paddingLeft: 16, marginBottom: 40 }} />
          <Line marginBottom={40} />
          <Text style={styles.welcomText}>WELCOME REZA</Text>
          <UserNextWorkoutPlanning />
          <View style={styles.buddiesWorkoutContainer}>
            <Text style={styles.titleText}>upcoming buddies workout</Text>
            <Text style={styles.subTitleText}>
              Discover your buddies' latest workout routines, Join in for Fun
              and Progress!
            </Text>
            <GalleryBuddiesWorkout />
          </View>
          <View>
            <Text style={styles.titleText}>people you might know</Text>
            <GalleryPeopleYouMightKnow />
          </View>
          <View>
            <Text style={styles.titleText}>whats new</Text>
            <Text style={styles.subTitleText}>
              Checkout the lates news on MATE-UP
            </Text>
            <CardMeetTheMemberOfTheMonth />
            <GalleryEducationalContent />
          </View>
          <View style={{ alignItems: "center", marginBottom: 200 }}>
            <AppButton title={"see all"} width={222} height={45} />
          </View>
        </Screen>
      </ScrollView>
      <View style={styles.fixButtonPosition}>
        <AppButtonBorder
          image={require("../../../assets/icons/calendar.png")}
          title="calendar"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
    flex: 1,
  },
  welcomText: {
    fontFamily: "montserrat-black",
    fontSize: 48,
    color: colors.white,
    marginBottom: 10,
    paddingLeft: 16,
  },
  fixButtonPosition: {
    position: "absolute",
    zIndex: 1,
    right: 16,
    top: "75%",
    buttom: 0,
  },
  buddiesWorkoutContainer: {
    marginTop: 96,
  },
  titleText: {
    fontFamily: "montserrat-black",
    fontSize: 26,
    color: colors.orangePrimary,
    marginBottom: 10,
    textTransform: "uppercase",
    paddingLeft: 16,
  },
  subTitleText: {
    fontFamily: "nunitoSans-regular",
    fontSize: 14,
    color: colors.white,
    marginBottom: 32,
    paddingLeft: 16,
  },
});
