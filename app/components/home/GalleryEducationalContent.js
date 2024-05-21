//educational content in homrpage

import { FlatList, StyleSheet, View } from "react-native";
import React from "react";

import CardEducationalContent from "./CardEducationalContent";

export default function GalleryEducationalContent({ educationalContent }) {
  const dataEducationalContent = [
    {
      id: 1,
      image: require("../../../assets/image/educational-1.jpg"),
      title: "workout buddy",
      subttle: "Your buddy will thank you for it",
    },
    {
      id: 2,
      image: require("../../../assets/image/educational-2.jpg"),
      title: "move with me",
      subttle: "behind the scenes by sarah",
    },
  ];
  return (
    <View>
      <FlatList
        vertical
        style={styles.container}
        data={dataEducationalContent}
        keyExtractor={(educationalContent) => educationalContent.id.toString()}
        renderItem={({ item }) => (
          <CardEducationalContent
            onPress={() => console.log("educational content", item)}
            image={item.image}
            title={item.title}
            subttle={item.subttle}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

//to be used in screen as:

{
  /* <GalleryEducationalContent educationalContent={dataEducationalContent} /> */
}

//to use a button below it
{
  /* <View style={{ alignItems: "center", marginBottom: 200 }}>
<AppButton title={"see all"} width={222} height={45} />
</View> */
}
