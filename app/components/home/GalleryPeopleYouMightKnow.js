//home page

import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CardProfile from "../CardProfile";
import colors from "../../config/colors";
import { getFromAsyncStorage } from "../../auth/asyncStorage";
import { useEffect, useState } from "react";
import membersApi from "../../api/members";

function GalleryPeopleYouMightKnow({ onPress }) {
  const navigation = useNavigation();
  //dummy data for testing
  // const membersData = [
  //   {
  //     id: 1,
  //     name: "Red ",
  //     image: require("../../../assets/person-1.jpg"),
  //   },
  //   {
  //     id: 2,
  //     name: "Couch ",
  //     image: require("../../../assets/person-1.jpg"),
  //   },
  //   {
  //     id: 3,
  //     name: "Couch ",
  //     image: require("../../../assets/person-1.jpg"),
  //   },
  //   {
  //     id: 4,
  //     name: "Couch111111111 ",
  //     image: require("../../../assets/person-1.jpg"),
  //   },
  //   {
  //     id: 5,
  //     name: "Couch ",
  //     image: require("../../../assets/person-1.jpg"),
  //   },
  // ];

  const [memberId, setMemberId] = useState(0);
  const [youMightKnow, setYouMightKnow] = useState([]);

  // Load memberId from AsyncStorage
  const loadMemberId = async () => {
    try {
      const memberId = await getFromAsyncStorage("memberId");
      setMemberId(memberId);
    } catch (error) {
      console.error("Error loading memberId:", error);
    }
  };

  useEffect(() => {
    // Load memberId
    loadMemberId();
    // if memberId exists, load buddies
    if (memberId) {
      loadmembersYouMightKnow();
    }
  }, [memberId]);

  const loadmembersYouMightKnow = async () => {
    try {
      const memberId = await getFromAsyncStorage("memberId");
      const response = await membersApi.getmembersYouMightKnow(memberId);
      setYouMightKnow(response.data.people_you_might_know);
    } catch (error) {
      console.error("Error loading buddies:", error);
    }
  };

  const capitalizeFirstLetter = (string) => {
    // capitalize first letter and make rest lowercase
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  return (
    <View>
      <Text style={styles.titleText}>people you might know</Text>
      <View>
        <FlatList
          style={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={youMightKnow}
          initialNumToRender={
            youMightKnow && youMightKnow.length > 0
              ? youMightKnow.length
              : undefined
          }
          keyExtractor={(members) => members.id.toString()}
          renderItem={({ item }) => (
            <CardProfile
              // onPressProfile={() => navigation.navigate("MemberProfile", item)}
              onPressProfile={() => onPress(item)}
              name={capitalizeFirstLetter(item.name)}
              backgroundColor={colors.blackBc}
              image={{ uri: item.profile_image_url }}
              flexDirection={"column"}
              cardWidth={120}
              cardHeight={98}
              cardBorderWidth={1}
              cardBorderColor={colors.black}
              cardRadius={5}
              imageHeight={52}
              imageWidth={52}
              imageRadius={52 / 2}
              textColor={colors.white}
              fontFamily="nunitoSans-bold"
              fontSize={14}
              paddingLeft={6}
              paddingRight={6}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    marginBottom: 46,
  },

  titleText: {
    fontFamily: "montserrat-black",
    fontSize: 26,
    color: colors.orangePrimary,
    marginBottom: 10,
    textTransform: "uppercase",
    paddingLeft: 16,
  },
  subTitleText: {
    fontFamily: "nunitoSans-regular",
    fontSize: 14,
    color: colors.white,
    marginBottom: 10,
    paddingLeft: 16,
  },
});

export default GalleryPeopleYouMightKnow;

//to be used in screen as:
{
  /* <GalleryPeopleYouMightKnow members={members} /> */
}
