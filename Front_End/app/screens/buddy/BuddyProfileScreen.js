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
import ListBulletPointWithText from "../../components/ListBulletPointWithText";
import BulletList from "../../components/shareMemberProfile/BulletList";
import { GalleryBuddies } from "../../components/buddy";

export default function BuddyProfileScreen({ userProfile }) {
  const {
    firstName,
    lastName,
    location,
    bio,
    userImage,
    userworkout,
    level,
    buddiesData,
  } = userProfile;

  return (
    <Screen style={styles.screen}>
      <ScrollView style={styles.container}>
        <HeaderTile
          onPressBack={() => console.log("pressed back")}
          onPressShare={() => console.log("pressed share")}
        />
        <UserImage userImage={userImage} />
        <ProfileTile
          firstName={firstName}
          lastName={lastName}
          location={location}
          onpressmessage={() => console.log("pressed message")}
        />
        <Bio bio={bio} />
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
                titles={level}
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
          titles={userworkout}
          textColor={colors.white}
        />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
        <GalleryBuddies buddies={buddiesData} header={"buddies"} />
        <Line marginTop={62} marginBottom={22} width={"90%"} />
      </ScrollView>
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
  level: {
    marginLeft: 16,
  },
});
