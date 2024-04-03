import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BulletPointWithText from "./BulletPointWithText";
import colors from "../config/colors";

export default function ListBulletPointWithText({ titles }) {
  // Maximum number of workout types to display
  const maxType = 2;

  // Slice the titles array to include only the first three workout types
  const displayedTitles = titles.slice(0, maxType);

  // to indicate if moreAsText is needed
  const showMoreAsText = titles.length > maxType;

  //to indicate if last workout is needed
  const showThirdType = titles.length > 2;
  return (
    <View>
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
              textColor={colors.white}
              fontFamily="nunitoSans-extraBold"
              textTransform={"uppercase"}
              fontSize={12}
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
              textColor={colors.white}
              fontFamily="nunitoSans-extraBold"
              textTransform={"uppercase"}
              fontSize={12}
              title={titles[maxType]} // Display the third workout title
            />
            {showMoreAsText && <Text style={styles.moreAsText}>more</Text>}
          </View>
        )}
      </View>
    </View>
  );
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
});

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
