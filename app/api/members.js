import challenge from "./challenge";
import client from "./client";
import { getUserToken } from "../auth/userToken";
const token = getUserToken();

const getUserClubMembers = () => client.get("/members");
const getMatchClubMembers = () => client.get("/members");
const getConnectAllMembers = () => client.get("/members");
const getSearch = () => client.get("/members");

const getMembersProfile = (memberId) => client.get(`/member/${memberId}`);

const getBuddies = () => {
  return client.get('/buddy/list', {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}` 
    }
  });
};

export default {
  getBuddies,
  getUserClubMembers,
  getMatchClubMembers,
  getConnectAllMembers,
  getMembersProfile,
  getSearch,
};
