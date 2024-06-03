import React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppButton from "../../components/AppButton";
import BulletPointWithText from "../../components/BulletPointWithText";
import ChallengeDescription from "../../components/challenge/ChallengeDescription";
import colors from "../../config/colors";
import CardProfile from "../../components/CardProfile";
import Screen from "../../components/Screen";
import challengeApi from "../../api/challenge";

export default function DetailsChallengeScreen({ route }) {
  // for backend connection
  // const [challengeDetails, setChallengeDetails] = useState(null);
  const { challengeId, showBuddies } = route.params;
  console.log("my deatils:", challengeId);
  // useEffect(() => {
  //   loadChallengeDetails();
  // }, [challengeId]);

  // const loadChallengeDetails = async () => {
  //   try {
  //     const response = await challengeApi.getDetailsChallengeScreen(challengeId);
  //     setChallengeDetails(response.data.challenge);
  //     console.log(response.data.challenge);
  //   } catch (error) {
  //     console.log("Error loading challenge details:", error);
  //   }
  // };
  // if (!challengeDetails) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator
  //         size="large"
  //         color={colors.orangeSecondary}
  //         style={{ marginTop: 50 }}
  //       />
  //       <Text
  //         style={{
  //           textAlign: "center",
  //           marginTop: 20,
  //           fontSize: 16,
  //           color: colors.orangeSecondary,
  //         }}
  //       >
  //         Loading...
  //       </Text>
  //     </View>
  //   );
  // }

  const navigation = useNavigation();

  const challengeDetails = {
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
    numberOfMembers,
    yourBuddies,
  } = challengeDetails;

  return (
    <Screen>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={challengeImage} style={styles.image} />
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
            fontFamily="nunitoSans-bold"
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
        {showBuddies && yourBuddies && (
          <View>
            <Text style={styles.yourBuddies}>YOUR BUDDIES</Text>
            <View style={styles.buddiesContainer}>
              {yourBuddies.map((buddy, id) => (
                <CardProfile
                  key={id}
                  name={buddy.name}
                  image={buddy.image}
                  flexDirection={"row"}
                  cardWidth={"100%"}
                  imageHeight={52}
                  imageWidth={52}
                  imageRadius={52 / 2}
                  fontSize={14}
                  textColor={colors.white}
                  fontFamily="nunitoSans-regular"
                  marginBottom={10}
                  justifyContent={"flex-start"}
                />
              ))}
            </View>
          </View>
        )}
        <Text style={styles.membersNumber}>
          {numberOfMembers} members have already joined!
        </Text>
      </ScrollView>
      <View style={styles.button}>
        <AppButton
          title="Join"
          fontSize={14}
          onPress={() =>
            navigation.navigate("JoinedChallenge", { challengeId: challengeId })
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    marginLeft: 16,
  },
  image: {
    width: 78,
    height: 78,
    borderRadius: 78 / 2,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 67,
    marginTop: 40,
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
  membersNumber: {
    fontFamily: "nunitoSans-regular",
    fontSize: 16,
    color: colors.grayLight50,
    marginBottom: 300,
  },
  yourBuddies: {
    fontFamily: "montserrat-black",
    color: colors.orangePrimary,
    fontSize: 14,
  },
  buddiesContainer: {
    marginTop: 10,
    marginBottom: 40,
  },
  button: {
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    right: 16,
    left: 16,
  },
});
