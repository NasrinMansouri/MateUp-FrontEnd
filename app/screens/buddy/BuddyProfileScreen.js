import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import Line from "../../components/Line";
import {
  Bio,
  ProfileTile,
  UserImage,
} from "../../components/shareMemberProfile";
import membersProfileApi from "../../api/membersProfile";
import { GalleryBuddies, RequestCalendarAccess } from "../../components/buddy";
import ListBulletPointWithText from "../../components/ListBulletPointWithText";
import BulletList from "../../components/shareMemberProfile/BulletList";
import GalleryJoinedChallenge from "../../components/challenge/GalleryJoinedChallenge";
import { useNavigation } from "@react-navigation/native";

export default function BuddyProfileScreen({ route }) {
  const navigation = useNavigation();


  // const { memberProfile } = route.params;
  // const { memberId } = route.params;
  // useEffect(() => {
  //   // Fetch member profile based on itemId
  //   const fetchMemberProfile = async () => {
  //     // Simulating data fetching
  //     const response = await fetch(
  //       `https://your-api-url/memberProfile/${memberId}`
  //     );
  //     const data = await response.json();
  //     setMemberProfile(data);
  //   };

  //   fetchMemberProfile();
  // }, [memberId]);

  // if (!memberProfile) {
  //   return <Text>Loading...</Text>;
  // }

  // for backend connection
  // const [memberProfile, setMemberProfile] = useState({});

  // useEffect(() => {
  //   loadMemberProfile();
  // }, []);

  // const loadMemberProfile = async () => {
  //   const response = await membersProfileApi.getMembersProfile();
  //   setMemberProfile(response.data);
  // };

  // // // pass userProfile as prop and get the data from backend later
  // const memberProfile = {
  //   id: 1,
  //   firstName: "John",
  //   lastName: "Doe",
  //   location: "los angeles street" + " 123",
  //   bio: "Hey there, I’m a fitness enthusiast, born with love for movement, my journey to fitness has been a dynamic dance between sweat sessions and socialising.",
  //   userImage: require("../../../assets/person3.jpg"),
  //   userworkout: [
  //     "Running",
  //     "Swimming",
  //     "Cycling",
  //     "Strength Training",
  //     "Yoga",
  //   ],
  //   level: ["Beginner"],
  //   buddiesData: [
  //     {
  //       id: 1,
  //       name: "John Doe",
  //       image: require("../../../assets/person3.jpg"),
  //     },
  //     {
  //       id: 2,
  //       name: "John Doeeeeeeeeeeeeeeeeeee",
  //       image: require("../../../assets/person3.jpg"),
  //     },
  //     {
  //       id: 3,
  //       name: "John Doe",
  //       image: require("../../../assets/person3.jpg"),
  //     },
  //     {
  //       id: 4,
  //       name: "John Doeeeeeeeeeeeeeeeeeee",
  //       image: require("../../../assets/person3.jpg"),
  //     },
  //     {
  //       id: 5,
  //       name: "John Doe",
  //       image: require("../../../assets/person3.jpg"),
  //     },
  //   ],
  //   joinedChallengeData: [
  //     {
  //       id: 1,
  //       challenegImage: require("../../../assets/person3.jpg"),
  //       challengeName: "Cardio Boost Challenge",
  //       challengeGoal: "15 Hours",
  //       startDate: "Aug 3",
  //       endDate: "Aug 4",
  //       year: "2022",
  //       time: "10:00 AM",
  //     },
  //     {
  //       id: 2,
  //       challenegImage: require("../../../assets/person3.jpg"),
  //       challengeName: "Cardio Boost Challenge",
  //       challengeGoal: "15 Hours",
  //       startDate: "Aug 3",
  //       endDate: "Aug 4",
  //       year: "2022",
  //       time: "10:00 AM",
  //     },
  //   ],
  // };

  const { buddyId } = route.params;
  const [buddyProfile, setBuddyProfile] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    const fetchBuddyProfile = async () => {
      try {
        const response = await membersProfileApi.getMembersProfile(buddyId);
        setBuddyProfile(response.data);
        console.log('Buddy profile:', response.data);
      } catch (error) {
        console.error('Failed to fetch buddy profile', error);
      }
    };

    fetchBuddyProfile();
  }, [buddyId]);

  if (!buddyProfile) {
    return <Text>Loading...</Text>;
  }

  // const goToTop = () => {
  //   scrollRef.current.scrollTo({ y: 0, animated: true });
  // };

  // const handleGoToCalendar = () => {
  //   console.log("go to calendar");
  // };

  location = "Raghenoplein 21 bis, 2800 Mechelen";

  return (
    <Screen style={styles.screen}>
      <ScrollView style={styles.container} ref={scrollRef}>
        {/* <HeaderTile
          onPressBack={() => console.log("pressed back")}
          onPressShare={() => console.log("pressed share")}
        /> */}
        <UserImage
          userImage={buddyProfile.user.profile_image_url}
          imageWidth={116}
          imageHeight={116}
          imageRadius={116 / 2}
          marginLeft={16}
          marginTop={40}
          marginBottom={16}
        />
        <ProfileTile
          firstName={buddyProfile.user.name}
          lastName={buddyProfile.user.surname}
          location={location}
          onpressmessage={() => console.log("pressed message")}
        />
        <Bio bio={buddyProfile.user.bio} />
        <View style={styles.buttonContainer}>
          <AppButton
            title="Add As Buddy"
            onPress={() => console.log("add As buddy btn pressed")}
            fontSize={14}
          />
        </View>
        {level && (
          <View>
            <Line marginTop={62} marginBottom={22} width={"90%"} />
            <View style={styles.level}>
              <ListBulletPointWithText
                titles={buddyProfile.level_fitness}
                header={"Fitness level"}
                textColor={colors.white}
                fontSize={16}
                textTransform={"capitalize"}
              />
            </View>
          </View>
        )}
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <BulletList
          header={"workout"}
          titles={buddyProfile.workout_types}
          textColor={colors.white}
        />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <GalleryBuddies buddies={buddies} header={"buddies"} />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        {/* <GalleryJoinedChallenge
          joinedChallenge={joinedChallengeData}
          header={"joined challenges"}
        /> */}
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        {/* <RequestCalendarAccess
          userFirstName={firstName}
          onPressGoToTop={goToTop}
          onPressGoToCalendar={handleGoToCalendar}
          isBuddy={false} // change to true if they are buddy
        /> */}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.blackBc,
  },
  buttonContainer: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 22,
  },
  level: {
    marginLeft: 16,
  },
});

{
  /* <BuddyProfileScreen userProfile={userProfileData} /> */
}

// const userProfileData = {
//   id: 1,
//   firstName: "John",
//   lastName: "Doe",
//   location: "los angeles street" + " 123",
//   bio: "Hey there, I’m a fitness enthusiast, born with love for movement, my journey to fitness has been a dynamic dance between sweat sessions and socialising.",
//   userImage: require("./assets/person2.jpg"),
//   userworkout: ["Running", "Swimming", "Cycling", "Strength Training", "Yoga"],
//   level: ["Beginner"],
//   buddiesData: [
//     {
//       id: 1,
//       name: "John Doe",
//       image: require("./assets/person3.jpg"),
//     },
//     {
//       id: 2,
//       name: "John Doeeeeeeeeeeeeeeeeeee",
//       image: require("./assets/person4.jpg"),
//     },
//     {
//       id: 3,
//       name: "John Doe",
//       image: require("./assets/person5.jpg"),
//     },
//     {
//       id: 4,
//       name: "John Doeeeeeeeeeeeeeeeeeee",
//       image: require("./assets/person2.jpg"),
//     },
//     {
//       id: 5,
//       name: "John Doe",
//       image: require("./assets/person3.jpg"),
//     },
//   ],
//   joinedChallengeData: [
//     {
//       id: 1,
//       challenegImage: require("./assets/person2.jpg"),
//       challengeName: "Cardio Boost Challenge",
//       challengeGoal: "15 Hours",
//       startDate: "Aug 3",
//       endDate: "Aug 4",
//       year: "2022",
//       time: "10:00 AM",
//     },
//     {
//       id: 2,
//       challenegImage: require("./assets/person2.jpg"),
//       challengeName: "Cardio Boost Challenge",
//       challengeGoal: "15 Hours",
//       startDate: "Aug 3",
//       endDate: "Aug 4",
//       year: "2022",
//       time: "10:00 AM",
//     },
//   ],
//   firstName: "John",
// };
