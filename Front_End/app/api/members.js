import client from "./client";

const getBuddies = () => client.get("/buddies");
const getUserClubMembers = () => client.get("/userClubMembers");
const getMatchClubMembers = () => client.get("/matchClubMembers");
const getConnectAllMembers = () => client.get("/connectAllMembers");

export default {
  getBuddies,
  getUserClubMembers,
  getMatchClubMembers,
  getConnectAllMembers,
};
