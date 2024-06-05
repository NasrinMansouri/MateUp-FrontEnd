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
import membersApi from "../../api/members";
import BulletList from "../../components/shareMemberProfile/BulletList";
import GalleryJoinedChallenge from "../../components/challenge/GalleryJoinedChallenge";
// import { useNavigation } from "@react-navigation/native";

export default function BuddyProfileScreen({ route, navigation }) {
  const scrollRef = useRef();
  const [memberProfile, setMemberProfile] = useState(null); //or ({}) //pass an empty object
  // const navigation = useNavigation();

  //to change the state of button when clicked
  const [buttonClicked, setButtonClicked] = useState({
    title: "Send Buddy Request",
    backgroundColor: colors.green,
  });
  const { memberId } = route.params;
  // for backend connection

  const handleButtonClicked = () => {
    setButtonClicked((toggleState) => ({
      //check if the current state is send buddy request,
      //if yes it will change it to cancel buddy request
      // else it will change it to send buddy request, which means it is cancel request
      title:
        toggleState.title === "Send Buddy Request"
          ? "Cancel Buddy Request"
          : "Send Buddy Request",
      backgroundColor:
        toggleState.backgroundColor === colors.green
          ? colors.orangeSecondary
          : colors.green,
    }));
  };

  //for backend connection

  useEffect(() => {
    loadMemberProfile();
  }, [memberId]);

  const loadMemberProfile = async () => {
    try {
      const response = await membersApi.getMembersProfile(memberId);
      setMemberProfile(response.data.member);
      console.log(response.data.member);
    } catch (error) {
      console.error("Error loading member profile:", error);
    }
  };
  if (!memberProfile) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const goToTop = () => {
    scrollRef.current.scrollTo({ y: 0, animated: true });
  };

  const handleGoToCalendar = () => {
    console.log("go to calendar");
  };

  const {
    firstName,
    lastName,
    userImage,
    location,
    bio,
    userworkout,
    level,
    buddiesData,
    joinedChallengeData,
  } = memberProfile;

  // location = "Raghenoplein 21 bis, 2800 Mechelen";
  return (
    <Screen style={styles.screen}>
      <ScrollView style={styles.container} ref={scrollRef}>
        {/* <HeaderTile
          onPressBack={() => console.log("pressed back")}
          onPressShare={() => console.log("pressed share")}
        /> */}
        <UserImage
          userImage={memberProfile.user.profile_image_url}
          //userImage={userImage}
          // userImage={userProfile.userImage}
          //or
          //userImage={userImage}
          imageWidth={116}
          imageHeight={116}
          imageRadius={116 / 2}
          marginLeft={16}
          marginTop={40}
          marginBottom={16}
        />
        <ProfileTile
          firstName={memberProfile.user.name}
          lastName={memberProfile.user.surname}
          //firstName={firstName}
          // firstName={userProfile.firstName}
          // lastName={lastName}
          location="Raghenoplein 21 bis, 2800 Mechelen"
          onpressmessage={() => console.log("pressed message")}
        />
        <Bio bio={memberProfile.user.bio} />
        <View style={styles.buttonContainer}>
          <AppButton
            title={buttonClicked.title}
            backgroundColor={buttonClicked.backgroundColor}
            onPress={handleButtonClicked}
            // onPress={() => console.log("add As buddy btn pressed")}
            fontSize={14}
          />
        </View>

        <View>
          <Line marginTop={62} marginBottom={22} width={"90%"} />
          <View style={styles.level}>
            <ListBulletPointWithText
              titles={memberProfile.level_fitness}
              //titles={level}
              // titles={userProfile.level}
              header={"Fitness level"}
              textColor={colors.white}
              fontSize={16}
              textTransform={"capitalize"}
            />
            {console.log(memberProfile.level_fitness)}
          </View>
        </View>

        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <BulletList
          header={"workout"}
          titles={memberProfile.workout_types}
          textColor={colors.white}
        />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        {/* <GalleryBuddies buddies={buddies} header={"buddies"} /> */}
        <GalleryBuddies
          buddies={memberProfile.buddies}
          // buddies={userProfile.buddiesData}
          header={"buddies"}
        />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        {/* <GalleryJoinedChallenge
          // joinedChallenge={joinedChallengeData}
          joinedChallenge={userProfile.joinedChallengeData}
          header={"joined challenges"}
        /> */}
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <RequestCalendarAccess
          userFirstName={memberProfile.user.name}
          onPressGoToTop={goToTop}
          onPressGoToCalendar={handleGoToCalendar}
          isBuddy={false} // change to true if they are buddy
        />
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
