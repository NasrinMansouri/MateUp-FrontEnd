// horizontal scrollable list of buddies with name
//also for user profilr to display buddies without name
// used on top of home page

import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import BuddyProfileScreen from "../../screens/buddy/BuddyProfileScreen";

import CardProfile from "../CardProfile";
import colors from "../../config/colors";

function GalleryBuddies({ buddies, style, header, paddingLeft = 16 }) {
  const navigation = useNavigation();
  const capitalizeFirstLetter = (string) => {
    // capitalize first letter and make rest lowercase
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  //dummy data for testing
  // const buddiesData = [
  //   {
  //     id: 1,
  //     name: "MMMMMMMMMMMMMMMM ",
  //     image: require("../../../assets/person-1.jpg"),
  //   },
  //   {
  //     id: 2,
  //     name: "Coucheeeeeeee ",
  //     image: require("../../../assets/person-1.jpg"),
  //   },
  //   {
  //     id: 3,
  //     name: "Couchhhhhhhhh ",
  //     image: require("../../../assets/person-1.jpg"),
  //   },
  //   {
  //     id: 4,
  //     name: "NNNNNN NNNNN ",
  //     image: require("../../../assets/person-1.jpg"),
  //   },
  //   {
  //     id: 5,
  //     name: "Couch ",
  //     image: require("../../../assets/person-1.jpg"),
  //   },
  // ];
  return (
    <View>
      {header && (
        <View>
          <Text style={styles.header}>{header}</Text>
        </View>
      )}
      {console.log(buddies)}
      <FlatList
        style={[styles.container, style, { paddingLeft: paddingLeft }]}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={buddies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <CardProfile
              onPressProfile={() => navigation.navigate(
                "MemberProfile",
                item,
                // {
                //   memberProfile: memberProfile,
                // }
              )}
              // onPressProfile={onPress}
              // name={capitalizeFirstLetter(item.name)}
              name={item.user.name ? capitalizeFirstLetter(item.user.name) : null}
              backgroundColor={colors.blackBc}
              image={item.user.profile_image_url}
              flexDirection={"column"}
              cardWidth={97}
              cardHeight={107}
              imageHeight={77}
              imageWidth={77}
              imageRadius={77 / 2}
              textColor={colors.white}
              fontSize={14}
              gap={10} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
    // paddingLeft: 16,
  },
  header: {
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    fontSize: 26,
    textTransform: "uppercase",
    marginBottom: 8,
    marginLeft: 16,
  },
});
export default GalleryBuddies;

//can be use wihout having name prop

// to be used in screen as:

//to be used in screen as:
{
  /* <GalleryBuddies buddies={buddiesData} /> */
}
