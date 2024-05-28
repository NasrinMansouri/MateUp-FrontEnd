import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";

import colors from "../../config/colors";
import Screen from "../../components/Screen";
import StopWatch from "../../screens/challenge/StopWatch";
import BulletPointWithText from "../../components/BulletPointWithText";
import ChallengeDescription from "../../components/challenge/ChallengeDescription";
import DonutChart from "../../components/challenge/DonutChart";
import Line from "../../components/Line";
import ShowReactions from "../../components/challenge/ShowReactions";
import AddReactions from "../../components/challenge/AddReactions";
import AppButton from "../../components/AppButton";

export default function JoinChallengeScreen({ navigation }) {
  // const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleStart = () => {
    // setModalVisible(!modalVisible);
    navigation.navigate("StartChallenge");
  };

  const handleBackPress = () => {
    navigation.navigate("challenge", { screen: "My Challenges" });
  };

  // const handleModalClose = () => {
  //   setModalVisible(false);
  // };

  const challengeDetailsProgress = {
    challengeImage: require("../../../assets/person3.jpg"),
    ChallengeName: "Cardio Boost Challenge ",
    challengeType: "Cardio workout",
    duration: "15 Hours",
    startDate: "Aug 3",
    endDate: "Aug 4",
    year: "2022",
    challengeDescription:
      "Embark on a transformative journey! Commit to completing  15 hours of cardio within the next 30 days! Join me in making every step count during this four-week adventure! Let's share our experiences here and uplift each other along the way. We've got this! 💪🏃‍♀️🏃‍♂️",
    numberOfMembers: 10,
    yourBuddies: [
      {
        id: 1,
        name: "John Doeeeeeeeeeeeeeeeeeee",
        image: require("../../../assets/person4.jpg"),
      },
      {
        id: 2,
        name: "John Doeeeeeeeeeeeeeeeeeee",
        image: require("../../../assets/person5.jpg"),
      },
      {
        id: 3,
        name: "John Doeeeeeeeeeeeeeeeeeee",
        image: require("../../../assets/person4.jpg"),
      },
      {
        id: 4,
        name: "John Doeeeeeeeeeeeeeeeeeee",
        image: require("../../../assets/person5.jpg"),
      },
    ],
    numberOfLikes: 30,
    numberOfComments: 10,
    percentage: 0,
  };

  const {
    challengeImage,
    ChallengeName,
    challengeType,
    duration,
    startDate,
    endDate,
    year,
    challengeDescription,
    numberOfLikes,
    numberOfComments,
    percentage,
  } = challengeDetailsProgress;

  return (
    <Screen style={styles.screen}>
      <TouchableWithoutFeedback onPress={handleBackPress}>
        <View style={styles.headerTile}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={colors.orangeSecondary}
          />
          <Text style={styles.headerText}>My Challenges</Text>
        </View>
      </TouchableWithoutFeedback>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={challengeImage} style={styles.image} />
        <View style={styles.recordContainer}>
          <AppButton
            title="Start Challenge"
            fontSize={14}
            backgroundColor={colors.green}
            onPress={handleStart}
          />
        </View>
        <Text style={styles.name}>{ChallengeName}</Text>
        <View style={styles.typeContainer}>
          <BulletPointWithText
            title={challengeType}
            width={5}
            height={5}
            borderRadius={5 / 2}
            bulletColor={colors.orangePrimary}
            marginRight={4}
            textColor={colors.white}
            fontFamily="nunitoSans-extraBold"
            textTransform={"uppercase"}
            fontSize={16}
          />
        </View>
        <Text style={styles.durationDate}>{duration}</Text>
        <Text style={styles.durationDate}>
          {startDate} {endDate}, {year}
        </Text>
        <ChallengeDescription
          challengeDescription={challengeDescription}
          marginTop={40}
        />
        <View style={styles.progressHeader}>
          <Text style={styles.header1}>PROGRESS</Text>
          <TouchableOpacity onPress={() => console.log("details tapped")}>
            <Text style={styles.header2}>DETAILS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.donutContainer}>
          <DonutChart percentage={percentage} duration={duration} />
        </View>
        <Line marginBottom={20} marginTop={40} />
        <ShowReactions NumberOfReactions={numberOfLikes} title={"Likes"} />
        <Line marginBottom={20} marginTop={20} />
        <ShowReactions
          NumberOfReactions={numberOfComments}
          title={"Comments"}
        />
        <Line
          marginBottom={20}
          marginTop={20}
          backgroundColor={colors.blackBc}
        />
        <View style={styles.addReactionContainer}>
          <AddReactions />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerTile: {
    backgroundColor: colors.blackBc,
    height: 44,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    zIndex: 1,
  },
  headerText: {
    color: colors.orangeSecondary,
    fontSize: 16,
  },
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
  },
  recordContainer: {
    marginBottom: 50,
  },
  image: {
    width: 78,
    height: 78,
    borderRadius: 78 / 2,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 60,
  },
  name: {
    fontFamily: "montserrat-black",
    fontSize: 16,
    color: colors.white,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  typeContainer: {
    marginBottom: 10,
  },
  durationDate: {
    fontFamily: "montserrat-black",
    fontSize: 16,
    color: colors.orangePrimary,
    textTransform: "capitalize",
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  header1: {
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    fontSize: 20,
    textTransform: "uppercase",
  },
  header2: {
    fontFamily: "montserrat-black",
    color: colors.white,
    fontSize: 12,
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
  donutContainer: {
    marginTop: 30,
  },
  addReactionContainer: {
    marginBottom: 300,
  },
  closeButton: {
    position: "absolute",
    top: 35,
    left: 16,
    zIndex: 2,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "montserrat-black",
    // marginLeft: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.blackBc,
  },
});

// <Modal
//         animationType="slide"
//         visible={modalVisible}
//         onRequestClose={handleModalClose}
//       >
//         <View style={styles.modalContainer}>
//           <TouchableOpacity
//             style={styles.closeButton}
//             onPress={handleModalClose}
//           >
//             <Ionicons name="close" size={24} color={colors.white} />
//             {/* <Text style={styles.closeButtonText}>Cancel</Text> */}
//           </TouchableOpacity>
//           <StopWatch />
//         </View>
//       </Modal>
