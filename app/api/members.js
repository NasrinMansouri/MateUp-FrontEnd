import client from "./client";

const getBuddies = () => client.get("/members");
const getUserClubMembers = () => client.get("/members");
const getMatchClubMembers = () => client.get("/members");
const getConnectAllMembers = () => client.get("/members");
const getSearch = () => client.get("/members");

const getMembersProfile = (memberId) => client.get(`/members/${memberId}`);

export default {
  getBuddies,
  getUserClubMembers,
  getMatchClubMembers,
  getConnectAllMembers,
  getMembersProfile,
  getSearch,
};
