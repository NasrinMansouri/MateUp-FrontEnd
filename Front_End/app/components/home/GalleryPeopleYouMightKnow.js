//home page

import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import CardProfile from "../CardProfile";
import colors from "../../config/colors";

function GalleryPeopleYouMightKnow({ members, onPress }) {
  //dummy data for testing
  const membersData = [
    {
      id: 1,
      name: "Red ",
      image: require("../../../assets/person-1.jpg"),
    },
    {
      id: 2,
      name: "Couch ",
      image: require("../../../assets/person-1.jpg"),
    },
    {
      id: 3,
      name: "Couch ",
      image: require("../../../assets/person-1.jpg"),
    },
    {
      id: 4,
      name: "Couch111111111 ",
      image: require("../../../assets/person-1.jpg"),
    },
    {
      id: 5,
      name: "Couch ",
      image: require("../../../assets/person-1.jpg"),
    },
  ];

  const capitalizeFirstLetter = (string) => {
    // capitalize first letter and make rest lowercase
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  return (
    <View>
      <Text style={styles.titleText}>people you might know</Text>
      <View>
        <FlatList
          style={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={membersData}
          keyExtractor={(members) => members.id.toString()}
          renderItem={({ item }) => (
            <CardProfile
              onPress={onPress}
              name={capitalizeFirstLetter(item.name)}
              backgroundColor={colors.blackBc}
              image={item.image}
              flexDirection={"column"}
              cardWidth={120}
              cardHeight={98}
              cardBorderWidth={1}
              cardBorderColor={colors.black}
              cardRadius={5}
              imageHeight={52}
              imageWidth={52}
              imageRadius={52 / 2}
              textColor={colors.white}
              fontFamily="nunitoSans-bold"
              fontSize={14}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    marginBottom: 96,
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

export default GalleryPeopleYouMightKnow;

//to be used in screen as:
{
  /* <GalleryPeopleYouMightKnow members={members} /> */
}
