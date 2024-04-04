import { StyleSheet, FlatList } from "react-native";
import React from "react";

import CardAllCoaches from "./CardAllCoaches";

export default function GalleryAllCoaches({ meetAllCoaches }) {
  return (
    <FlatList
      style={styles.container}
      data={meetAllCoaches}
      keyExtractor={(meetAllCoaches) => meetAllCoaches.id.toString()}
      renderItem={({ item }) => (
        <CardAllCoaches
          name={item.name}
          image={item.image}
          location={item.location}
          titles={item.titles}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
