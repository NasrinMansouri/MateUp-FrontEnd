import React, { useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  GalleryAllCoaches,
  GalleryCoachesClubMembers,
} from "../../../components/coach";
import useApi from "../../../hooks/useApi";
import coaches from "../../../api/coaches";
import colors from "../../../config/colors";

const coachesClubMembersData = [
  {
    id: 1,
    name: "John Doeeeeeeeeeeeeeeeeee",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    titles: ["strength training"],
  },
];

const meetAllCoachesData = [
  {
    id: 1,
    name: "John Doee",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running"],
  },
  {
    id: 2,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 3,
    name: "aaron",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training", "running", "swimming", "yoga", "boxing"],
  },
  {
    id: 4,
    name: "ray pather ",
    image: require("../../../../assets/person2.jpg"),
    location: "los angeles street" + " 123",
    titles: ["strength training"],
  },
];

export default function MeetTrainer({ onPressClubCoaches, onPressAllCoaches }) {
  // For backend connection
  // const getCoachesClubMembersApi = useApi(coachesApi.getCoachesClubMembers);
  // const getMeetAllCoachesApi = useApi(coachesApi.getMeetAllCoaches);

  // useEffect(() => {
  //   getCoachesClubMembersApi.request();
  //   getMeetAllCoachesApi.request();
  // }, []);

  const navigation = useNavigation();

  const renderItemCache = {
    GalleryCoachesClubMembers: (item) => (
      <GalleryCoachesClubMembers
        coachesClubMember={coachesClubMembersData}
        // coachesClubMember={getCoachesClubMembersApi.data}
        // loading={getCoachesClubMembersApi.loading}
        // error={getCoachesClubMembersApi.error}
        onPress={(item) =>
          navigation.navigate("CoachProfile", { trainerId: item.id })
        }
      />
    ),
    GalleryAllCoaches: (item) => (
      <GalleryAllCoaches
        meetAllCoaches={meetAllCoachesData}
        // meetAllCoaches={getMeetAllCoachesApi.data}
        // loading={false}
        // loading={getMeetAllCoachesApi.loading}
        // error={getMeetAllCoachesApi.error}
        onPress={(item) =>
          navigation.navigate("CoachProfile", { trainerId: item.id })
        }
      />
    ),
  };

  // Define array of data, which contains objects with a type property
  const data = [
    { type: "GalleryCoachesClubMembers" },
    { type: "GalleryAllCoaches" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => renderItemCache[item.type](item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// export default function MeetTtrainer({
//   onPressClubCoaches,
//   onPressAllCoaches,
// }) {
//   // for backend connection
//   // const getCoachesClubMembersApi = useApi(coachesApi.getCoachesClubMembers);
//   // const getMeetAllCoachesApi = useApi(coachesApi.getmeetAllCoaches);
//   // useEffect(() => {
//   //   getCoachesClubMembersApi.request();
//   //   getMeetAllCoachesApi.request();
//   // }, []);

//   const navigation = useNavigation();
//   return (
//     <View>
//       <ScrollView style={styles.container}>
//         {/* <ActivityIndicator
//           animating={true}
//           // animating={
//           //   getCoachesClubMembersApi.loading || getMeetAllCoachesApi.loading
//           // }
//           color={colors.orangePrimary}
//           size="large"
//           style={{ marginTop: 100 }}
//         /> */}
//         <GalleryCoachesClubMembers
//           coachesClubMember={coachesClubMembersData}
//           // coachesClubMember={getCoachesClubMembersApi.data}
//           // onPressClubCoaches={onPressClubCoaches}
//           onPress={(item) =>
//             navigation.navigate("CoachProfile", { trainerId: item.id })
//           }
//         />
//         <GalleryAllCoaches
//           meetAllCoaches={meetAllCoachesData}
//           // meetAllCoaches={getMeetAllCoachesApi.data}
//           // onPressAllCoaches={onPressAllCoaches}
//           onPress={(item) =>
//             navigation.navigate("CoachProfile", { trainerId: item.id })
//           }
//         />
//       </ScrollView>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {},
});
