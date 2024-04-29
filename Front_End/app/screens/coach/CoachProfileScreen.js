import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import Line from "../../components/Line";
import {
  Bio,
  HeaderTile,
  ProfileTile,
  UserImage,
} from "../../components/shareMemberProfile";
import BulletList from "../../components/shareMemberProfile/BulletList";
import { GalleryDisplayVideos, TitleSubtitle } from "../../components/coach";

export default function CoachProfileScreen({ coachProfile }) {
  const {
    firstName,
    lastName,
    location,
    bio,
    userImage,
    expertise,
    education,
    language,
    ratingDetails,
    BehindSceneDetails,
    videos,
  } = coachProfile;

  return (
    <Screen style={styles.screen}>
      <ScrollView style={styles.container}>
        <HeaderTile
          onPressBack={() => console.log("pressed back")}
          onPressShare={() => console.log("pressed share")}
        />
        <UserImage
          userImage={userImage}
          imageWidth={375}
          imageHeight={212}
          marginBottom={16}
        />
        <ProfileTile
          firstName={firstName}
          lastName={lastName}
          location={location}
          onpressmessage={() => console.log("pressed message")}
        />
        <Bio bio={bio} />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <BulletList
          header={"Expertise"}
          titles={expertise}
          textColor={colors.white}
        />
        {education && (
          <View>
            <Line marginTop={62} marginBottom={22} width={"90%"} />
            <BulletList
              titles={education}
              header={"Education"}
              textColor={colors.white}
            />
          </View>
        )}
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <BulletList
          header={"Language"}
          titles={language}
          textColor={colors.white}
        />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <TitleSubtitle title={"Rating"} subTitle={ratingDetails} />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <TitleSubtitle
          title={"behind the scene Videos"}
          subTitle={BehindSceneDetails}
        />
        <View style={styles.videosContainer}>
          <GalleryDisplayVideos videos={videos} />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"see available groups"}
          width={"100%"}
          fontSize={14}
          onPress={() => console.log("pressed see available groups")}
          containerStyle={styles.buttonContainer}
        />
        <AppButton
          title={"create new group"}
          width={"100%"}
          fontSize={14}
          onPress={() => console.log("pressed create new group")}
          containerStyle={styles.buttonContainer}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonContainer: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 22,
  },
  expertise: {
    marginLeft: 16,
  },
  videosContainer: {
    marginTop: 42,
    marginBottom: 400,
  },
  buttonContainer: {
    gap: 10,
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    right: 16,
    left: 16,
    marginBottom: 100,
  },
});

// dummy data for coach Profile screen
// const coachProfileData = {
//   id: 1,
//   firstName: "John",
//   lastName: "Doe",
//   location: "los angeles street" + " 123",
//   bio: "Hey there, I’m a fitness enthusiast, born with love for movement, my journey to fitness has been a dynamic dance between sweat sessions and socialising.",
//   userImage: require("./assets/person3.jpg"),
//   userworkout: ["Running", "Swimming", "Cycling", "Strength Training", "Yoga"],
//   education: ["erps 3", "University of California, Los Angeles"],
//   expertise: ["lose weight", "get started", "lose belly fat", "lose weight"],
//   language: ["English", "Spanish", "French"],
//   ratingDetails:
//     "The cost for the service is 100 euros per hour for each group of 3 participants. This means that each person within the group will contribute 33.3 euros.",

//   BehindSceneDetails:
//     "“I live for hyping people up. I’m not a personal trainer, I’m an energy dealer.”",
//   firstName: "John",
//   videos: [
//     {
//       id: 1,
//       source: require("./assets/videos/trainer1.mp4"),
//     },
//     {
//       id: 2,
//       source: require("./assets/videos/trainer2.mp4"),
//     },
//   ],
// };

{
  /* <CoachProfileScreen coachProfile={coachProfileData} /> */
}
