import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

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
import coachesApi from "../../api/coaches";

export default function CoachProfileScreen({ navigation, route }) {
  // for backend connection
  // const [coachProfile, setCoachProfile] = useState(null);
  const { trainerId } = route.params;
  // useEffect(() => {
  //   loadCoachProfile();
  // }, [trainerId]);

  // const loadCoachProfile = async () => {
  //   try {
  //     const response = await coachesApi.getCoachesProfile(trainerId);
  //     setCoachProfile(response.data.trainer);
  //     console.log(response.data.trainer);
  //   } catch (error) {
  //     console.log("Error loading trainer profile:", error);
  //   }
  // };
  // if (!coachProfile) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator
  //         size="large"
  //         color={colors.orangeSecondary}
  //         style={{ marginTop: 50 }}
  //       />
  //       <Text
  //         style={{
  //           textAlign: "center",
  //           marginTop: 20,
  //           fontSize: 16,
  //           color: colors.orangeSecondary,
  //         }}
  //       >
  //         Loading...
  //       </Text>
  //     </View>
  //   );
  // }

  const coachProfile = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    location: "los angeles street" + " 123",
    bio: "Hey there, I’m a fitness enthusiast, born with love for movement, my journey to fitness has been a dynamic dance between sweat sessions and socialising.",
    userImage: require("../../../assets/person3.jpg"),
    userworkout: [
      "Running",
      "Swimming",
      "Cycling",
      "Strength Training",
      "Yoga",
    ],
    education: ["erps 3", "University of California, Los Angeles"],
    expertise: ["lose weight", "get started", "lose belly fat", "lose weight"],
    language: ["English", "Spanish", "French"],
    ratingDetails:
      "The cost for the service is 100 euros per hour for each group of 3 participants. This means that each person within the group will contribute 33.3 euros.",

    BehindSceneDetails:
      "“I live for hyping people up. I’m not a personal trainer, I’m an energy dealer.”",
    firstName: "John",
    videos: [
      {
        id: 1,
        source: require("../../../assets/videos/trainer1.mp4"),
      },
    ],
  };

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
        <UserImage
          userImage={userImage}
          // userImage={coachProfile.userImage}
          imageWidth={375}
          imageHeight={212}
          marginBottom={16}
        />
        <ProfileTile
          // name={coachProfile.firstName + " " + coachProfile.lastName}
          // location={coachProfile.location}
          firstName={firstName}
          lastName={lastName}
          location={location}
          onpressmessage={() => console.log("pressed message")}
        />
        <Bio
          bio={bio}
          // bio={coachProfile.bio}
        />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <BulletList
          header={"Expertise"}
          titles={expertise}
          // titles={coachProfile.expertise}
          textColor={colors.white}
        />
        {education && (
          <View>
            <Line marginTop={62} marginBottom={22} width={"90%"} />
            <BulletList
              titles={education}
              // titles={coachProfile.education}
              header={"Education"}
              textColor={colors.white}
            />
          </View>
        )}
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <BulletList
          header={"Language"}
          titles={language}
          // titles={coachProfile.language}
          textColor={colors.white}
        />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <TitleSubtitle
          title={"Rating"}
          subTitle={ratingDetails}
          // subTitle={coachProfile.ratingDetails}
        />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <TitleSubtitle
          title={"behind the scene Videos"}
          subTitle={BehindSceneDetails}
          // subTitle={coachProfile.BehindSceneDetails}
        />
        <View style={styles.videosContainer}>
          <GalleryDisplayVideos
            videos={videos}
            // videos={coachProfile.videos}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"see available groups"}
          width={"100%"}
          fontSize={14}
          onPress={() => navigation.navigate("AvailableGroups")}
          containerStyle={styles.buttonContainer}
        />
        <AppButton
          title={"create new group"}
          width={"100%"}
          fontSize={14}
          onPress={() => console.log("create new groups")}
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
    marginBottom: 10,
    bottom: 0,
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
