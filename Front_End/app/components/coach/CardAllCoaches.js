import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

import LocationWithIcon from "../LocationWithIcon";
import ListBulletPointWithText from "../ListBulletPointWithText";
import colors from "../../config/colors";

export default function CardAllCoaches({
  image,
  name,
  location,
  titles,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <View>
        <Image source={image} style={styles.image} />
      </View>
      <View>
        <View style={styles.containerName}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.containerLocation}>
          <LocationWithIcon location={location} color={colors.white} />
        </View>
        <View style={styles.containerTitles}>
          <ListBulletPointWithText titles={titles} textColor={colors.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // gap: 21,
    marginLeft: 16,
    marginBottom: 64,
  },
  image: {
    width: 73,
    height: 73,
    borderRadius: 73 / 2,
  },
  containerName: {
    marginBottom: 25,
    marginLeft: 20,
  },
  name: {
    fontFamily: "montserrat-black",
    fontSize: 12,
    color: colors.white,
    textTransform: "uppercase",
  },
  containerLocation: {
    marginLeft: 13,
  },
  containerTitles: {
    marginTop: 10,
    marginLeft: 20,
  },
});

//to be use in screen as:
{
  /* <CardAllCoaches
image={require("./assets/person2.jpg")}
name="John Doeeeeeeeeeeeeeeeeee"
location="los angeles street 123"
titles={["strength training", "running"]}
/> */
}

//to import inside app.js
// import { CardAllCoaches } from "./app/components/coach";
