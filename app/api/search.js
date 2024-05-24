import client from "./client";

const getSearch = (memberId) => client.get(`/members/${memberId}`);

export default {
  getSearch,
};
