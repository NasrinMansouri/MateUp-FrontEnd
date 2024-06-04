import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import CardFilter from "./CardFilter";

export default function GalleryFilters() {
  const [activeFilter, setActiveFilter] = useState("All");
  const handlePress = (filter) => {
    setActiveFilter(filter);
  };

  const filters = [
    { filter: "All", width: 60 },
    { filter: "Strenght Training", width: 161 },
    { filter: "Cardio Workout", width: 151 },
    { filter: "Flexibility & Mindfulness", width: 212 },
    { filter: "Group Workout", width: 152 },
  ];
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {filters.map(({ filter, width }) => (
          <View
            style={{
              marginLeft: filter === "All" ? 16 : 8,
              marginRight: filter === "Group Workout" ? 100 : 0,
            }}
            key={filter}
          >
            <CardFilter
              filter={filter}
              width={width}
              onPress={() => handlePress(filter)}
              isActive={filter === activeFilter}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
