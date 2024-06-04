// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import colors from "../config/colors";
// import HomeScreen from "../screens/home/HomeScreen";
// import BuddyScreen from "../screens/buddy/BuddyScreen";
// import BuddyProfileScreen from "../screens/buddy/BuddyProfileScreen";
// import NotificationScreen from "../screens/NotificationScreen";
// import MenueScreen from "../screens/home/MenueScreen";
// import UserProfileScreen from "../screens/home/UserProfileScreen";
// import Setting from "../screens/home/Setting";

// const Stack = createNativeStackNavigator();

// const HomeNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="home">
//       <Stack.Screen
//         name="home"
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />

//       <Stack.Screen
//         name="Buddy"
//         component={BuddyScreen}
//         options={{ headerShown: false }}
//       />

//       <Stack.Screen
//         name="MemberProfile"
//         component={BuddyProfileScreen}
//         options={{
//           headerStyle: {
//             backgroundColor: colors.blackBc,
//           },
//           headerTitle: "",
//         }}
//       />

//       <Stack.Screen
//         name="menu"
//         component={MenueScreen}
//         options={{
//           headerStyle: {
//             backgroundColor: colors.blackBc,
//           },
//           headerTitle: "",
//           headerBackTitle: "MATE-UP",
//         }}
//       />

//       <Stack.Screen
//         name="UserProfile"
//         component={UserProfileScreen}
//         options={{
//           headerStyle: {
//             backgroundColor: colors.blackBc,
//           },
//           headerTitle: "",
//         }}
//       />

//       <Stack.Screen
//         name="Setting"
//         component={Setting}
//         options={{
//           headerStyle: {
//             backgroundColor: colors.blackBc,
//           },
//         }}
//       />

//       <Stack.Screen
//         name="Notification"
//         component={NotificationScreen}
//         options={{
//           headerStyle: {
//             backgroundColor: colors.blackBc,
//             // TODO: the border bottom doesn't work!
//             borderBottomWidth: 1,
//             borderBottomColor: colors.grayLight50,
//           },
//           headerTitleStyle: {
//             color: colors.white,
//             fontSize: 16,
//           },
//           headerTitle: "Notifications",
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default HomeNavigator;
