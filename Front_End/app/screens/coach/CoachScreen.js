import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
  Platform,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";

import AppButtonBorder from "../../components/AppButtonBorder";
import Screen from "../../components/Screen";
import colors from "../../config/colors";
import TopNav from "../../components/topNavigation/TopNav";
import MeetTtrainer from "./coachScreenContent/MeetTtrainer";
import MySessions from "./coachScreenContent/MySessions";

// For android to enable Layoutanimation
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function CoachScreen({}) {
  // to keep track of which button is active
  const [activeContent, setActiveContent] = useState("meet trainers");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [activeContent]);

  // shows the content according to the button pressed
  const handleMeetTrainers = () => {
    setActiveContent("meet trainers");
  };
  const handleMySessions = () => {
    setActiveContent("my session");
  };

  return (
    <Screen>
      <View style={styles.nav}>
        <TopNav showSearchBar={true} />
      </View>
      <ScrollView>
        <View style={styles.topBtnscontainer}>
          <TouchableWithoutFeedback
            activeOpacity={0.9}
            onPress={handleMeetTrainers}
          >
            <View
              style={[
                styles.btn,
                activeContent === "meet trainers" && styles.activeBtn,
              ]}
            >
              <Text
                style={[
                  styles.text,
                  activeContent === "meet trainers" && styles.activeText,
                ]}
              >
                meet trainers
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            activeOpacity={0.9}
            onPress={handleMySessions}
          >
            <View
              style={[
                styles.btn,
                activeContent === "my session" && styles.activeBtn,
              ]}
            >
              <Text
                style={[
                  styles.text,
                  activeContent === "my session" && styles.activeText,
                ]}
              >
                my session
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.contentContainer}>
          {activeContent === "meet trainers" ? (
            <MeetTtrainer />
          ) : (
            <MySessions />
          )}
        </View>
      </ScrollView>
      {activeContent === "meet trainers" && (
        <View style={styles.fixButtonPosition}>
          <AppButtonBorder
            onPress={() => setModalVisible(true)}
            title="Filter"
            materialCommunityIcons={true}
            iconName="filter-variant"
          />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  // nav: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   zIndex: 1,
  // },

  fixButtonPosition: {
    position: "absolute",
    zIndex: 1,
    right: 16,
    top: "70%",
    bottom: 0,
  },
  topBtnscontainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 20,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.grayLight50,
  },
  activeBtn: {
    borderBottomColor: colors.green,
  },
  text: {
    color: colors.grayLight50,
    fontFamily: "montserrat-black",
    fontSize: 14,
    textTransform: "uppercase",
  },
  activeText: {
    color: colors.green,
  },
  contentContainer: {
    flex: 1,
    marginTop: 10,
  },
});
