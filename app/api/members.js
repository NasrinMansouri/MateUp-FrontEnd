import challenge from "./challenge";
import client from "./client";

const getBuddies = () => client.get(`/buddy/list/${5}`);
const getUserClubMembers = () => client.get("/members");
const getMatchClubMembers = () => client.get("/members");
const getConnectAllMembers = () => client.get("/members");
const getSearch = () => client.get("/members");

const getMembersProfile = (memberId) => client.get(`/member/${memberId}`);

export default {
  getBuddies,
  getUserClubMembers,
  getMatchClubMembers,
  getConnectAllMembers,
  getMembersProfile,
  getSearch,
};
