import client from "./client";

const getCoachesClubMembers = () => client.get("/trainers");
const getmeetAllCoaches = () => client.get("/trainers");

const getCoachesProfile = (trainerId) => client.get(`/trainers/${trainerId}`);

export default {
  getCoachesClubMembers,
  getmeetAllCoaches,
  getCoachesProfile,
};
