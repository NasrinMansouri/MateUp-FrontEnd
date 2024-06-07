import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BulletPointWithText from "./BulletPointWithText";
import colors from "../config/colors";

export default function ListBulletPointWithText({
  titles,
  textColor,
  header,
  fontSize = 12,
  textTransform = "uppercase",
}) {
  // Ensure titles is an array
  let displayedTitles = [];
  if (typeof titles === "string") {
    displayedTitles = titles.split(",");
  } else if (Array.isArray(titles)) {
    displayedTitles = titles;
  } else {
    // Handle the case when titles is neither a string nor an array
    return null; // Or handle it differently based on your requirements
  }

  // Maximum number of workout types to display
  const maxType = 2;

  // Slice the titles array to include only the first two workout types
  displayedTitles = displayedTitles.slice(0, maxType);

  //to indicate if last workout is needed
  const showThirdType = displayedTitles.length > 2;

  return (
    <View>
      {header && <Text style={styles.header}>{header}</Text>}
      <View style={styles.bulletPoints}>
        {displayedTitles.map((title, id) => (
          <View key={id} style={styles.listContainer}>
            <BulletPointWithText
              bulletColor={colors.orangePrimary}
              width={5}
              height={5}
              borderRadius={5 / 2}
              marginRight={4}
              marginBottom={4}
              textColor={textColor}
              fontFamily="nunitoSans-extraBold"
              textTransform={textTransform}
              fontSize={fontSize}
              title={title}
            />
          </View>
        ))}

        {showThirdType && (
          <View style={styles.lastListContainer}>
            <BulletPointWithText
              bulletColor={colors.orangePrimary}
              width={5}
              height={5}
              borderRadius={5 / 2}
              marginRight={4}
              marginBottom={4}
              textColor={textColor}
              fontFamily="nunitoSans-extraBold"
              textTransform={"uppercase"}
              fontSize={fontSize}
              title={displayedTitles[maxType - 1]} // Display the third workout title
            />
            {/* You can add 'more' text here if needed */}
            {showMoreAsText && <Text style={styles.moreAsText}>more</Text>}
          </View>
        )}
      </View>
    </View>
  );

  // to be use in screen as:
  {
    /* <ListBulletPointWithText
  titles={[
    "strength training",
    "running",
    "swimming",
    "yoga",
    "boxing",
  ]}
  /> */
  }
}

const styles = StyleSheet.create({
  bulletPoints: {
    flexDirection: "column", // Ensure workout types are displayed horizontally
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  lastListContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  moreAsText: {
    fontSize: 13,
    fontFamily: "nunitoSans-extraBold",
    color: colors.gray,
    marginLeft: 4, // Add some space between the last workout type and the ellipsis
  },
  header: {
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    fontSize: 26,
    textTransform: "uppercase",
    marginBottom: 8,
  },
});