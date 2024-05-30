// import { useEffect } from "react";
// import * as Notifications from "expo-notifications";

// import expoPushTokensApi from "../api/expoPushTokens";

// export default useNotifications = (notificationListener) => {
//   // for push notification
//   useEffect(() => {
//     registerForPushNotifications();

//     // to handle recieved notification if notificationListener exist
//     if (notificationListener) Notifications.addListener(notificationListener);
//   }, []);

//   //for push notification
//   const registerForPushNotifications = async () => {
//     try {
//       const permission = await Notifications.getPermissionsAsync();
//       if (!permission.granted) return;

//       //to get push notification token
//       const token = (await Notifications.getExpoPushTokenAsync()).data;
//       //instead of loging the token in console, now i send it to server
//       // expoPushTokensApi.register(token);
//       console.log(token);
//     } catch (error) {
//       console.log("Error getting a push token:", error);
//     }
//   };
// };
