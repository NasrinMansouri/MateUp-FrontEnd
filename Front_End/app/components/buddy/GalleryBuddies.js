// horizontal scrollable list of buddies with name
//also for user profilr to display buddies without name
// used on top of home page

import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

import CardProfile from "../CardProfile";
import colors from "../../config/colors";

function GalleryBuddies({ buddies, style, header }) {
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
      <FlatList
        style={[styles.container, style]}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={buddies}
        keyExtractor={(buddies) => buddies.id.toString()}
        renderItem={({ item }) => (
          <CardProfile
            onPress={() => console.log("my buddies", item)}
            // name={capitalizeFirstLetter(item.name)}
            name={item.name ? capitalizeFirstLetter(item.name) : null}
            backgroundColor={colors.blackBc}
            image={item.image}
            flexDirection={"column"}
            cardWidth={97}
            cardHeight={107}
            imageHeight={77}
            imageWidth={77}
            imageRadius={77 / 2}
            textColor={colors.white}
            fontSize={14}
            gap={10}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBc,
    paddingLeft: 16,
  },
  header: {
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    fontSize: 32,
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
