//home page

import React from "react";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";

import CardProfile from "../CardProfile";
import colors from "../../config/colors";

function GalleryPeopleYouMightKnow({ members }) {
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
    <FlatList
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={membersData}
      keyExtractor={(members) => members.id.toString()}
      renderItem={({ item }) => (
        <CardProfile
          onPress={() => console.log("members", item)}
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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    marginBottom: 96,
  },
});

export default GalleryPeopleYouMightKnow;

//to be used in screen as:
{
  /* <GalleryPeopleYouMightKnow members={members} /> */
}
