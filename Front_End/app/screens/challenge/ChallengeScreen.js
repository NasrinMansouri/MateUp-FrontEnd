import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  UIManager,
  Platform,
  FlatList,
} from "react-native";
import Screen from "../../components/Screen";
import colors from "../../config/colors";
import TopNav from "../../components/topNavigation/TopNav";
import TabButton from "../../components/tabButtons/TabButtons";
import { Join, MyChallenges } from "./challengeScreen";

// For android to enable Layoutanimation
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const data = [{ key: "join" }, { key: "my challenges" }];

export default function ChallengeScreen({}) {
  // to keep track of which button is active
  const [activeContent, setActiveContent] = useState("join");

  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [activeContent]);

  // shows the content according to the button pressed
  const handleJoin = () => {
    setActiveContent("join");
  };
  const handleMyChallenges = () => {
    setActiveContent("my challenges");
  };

  return (
    <Screen style={styles.screen}>
      <TopNav showSearchBar={true} />
      {/* <Text style={styles.title}>group challenges</Text> */}
      <View style={styles.topBtnscontainer}>
        <TabButton
          text="Join"
          active={activeContent === "join"}
          onPress={handleJoin}
        />
        <TabButton
          text="My Challenges"
          active={activeContent === "my challenges"}
          onPress={handleMyChallenges}
        />
      </View>
      {/* content */}
      <View style={styles.contentContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <View>
                {item.key === "join" && activeContent === "join" && <Join />}
                {item.key === "my challenges" &&
                  activeContent === "my challenges" && <MyChallenges />}
              </View>
            );
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.blackBc,
  },
  topBtnscontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    // marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 22,
    color: colors.white,
    textTransform: "uppercase",
    alignSelf: "center",
    marginTop: 30,
  },
});
