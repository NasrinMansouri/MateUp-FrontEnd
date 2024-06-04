import client from "./client";

const getCoachesClubMembers = () => client.get("/trainers");
const getMeetAllCoaches = () => client.get("/trainers");

const getCoachesProfile = (trainerId) => client.get(`/trainers/${trainerId}`);

export default {
  getCoachesClubMembers,
  getMeetAllCoaches,
  getCoachesProfile,
};
