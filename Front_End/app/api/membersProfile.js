import client from "./client";

const getMembersProfile = () => client.get("/membersProfile");

export default {
  getMembersProfile,
};
