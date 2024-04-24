//it also handle showing show more or  show less

import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import BulletPointWithText from "../BulletPointWithText";
import colors from "../../config/colors";

export default function BulletList({ titles, textColor, header }) {
  const [expanded, setExpanded] = useState(false);
  const maxType = 3;

  const displayedTitles = expanded ? titles : titles.slice(0, maxType);
  const showMoreAsText = titles.length > maxType;

  return (
    <View style={styles.container}>
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
              textColor={colors.white}
              fontFamily="nunitoSans-extraBold"
              textTransform={"capitalize"}
              fontSize={16}
              title={title}
            />
          </View>
        ))}
        {showMoreAsText && (
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <Text style={styles.moreAsText}>{expanded ? "less" : "more"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
  bulletPoints: {
    flexDirection: "column",
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  moreAsText: {
    fontSize: 16,
    fontFamily: "nunitoSans-extraBold",
    color: colors.green,
    marginLeft: 8,
  },
  header: {
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    fontSize: 28,
    textTransform: "uppercase",
    marginBottom: 8,
  },
});
