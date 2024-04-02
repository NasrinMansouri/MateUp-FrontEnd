//home page

import React from "react";
import { FlatList } from "react-native";

import CardProfile from "./CardProfile";
import colors from "../config/colors";

function GalleryPeopleYouMightKnow({ members }) {
  const capitalizeFirstLetter = (string) => {
    // capitalize first letter and make rest lowercase
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  return (
    <FlatList
      style={{ backgroundColor: colors.blackBc }}
      horizontal
      data={members}
      keyExtractor={(members) => members.id.toString()}
      renderItem={({ item }) => (
        <CardProfile
          onPress={() => console.log("members", item)}
          name={capitalizeFirstLetter(item.name)}
          image={item.image}
          flexDirection={"column"}
          cardWidth={120}
          cardHeight={98}
          cardBorderWidth={1}
          cardBorderColor={colors.black}
          imageHeight={52}
          imageWidth={52}
          borderRadius={52 / 2}
        />
      )}
    />
  );
}

export default GalleryPeopleYouMightKnow;

// to be used in screen as:
//dummy data for testing
// const members = [
//   {
//     id: 1,
//     name: "Red ",
//     image: require("./assets/person-1.jpg"),
//   },
//   {
//     id: 2,
//     name: "Couch ",
//     image: require("./assets/person-1.jpg"),
//   },
//   {
//     id: 3,
//     name: "Couch ",
//     image: require("./assets/person-1.jpg"),
//   },
//   {
//     id: 4,
//     name: "Couch111111111 ",
//     image: require("./assets/person-1.jpg"),
//   },
//   {
//     id: 5,
//     name: "Couch ",
//     image: require("./assets/person-1.jpg"),
//   },
// ];

//to be used in screen as:
{
  /* <GalleryPeopleToKnow members={members} /> */
}
