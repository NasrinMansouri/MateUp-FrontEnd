import client from "./client";
import { makeAuthenticatedRequest, getDataFromStorage } from "./apiUtils";

const getClubChallenges = async () => {
  // get the member ID from AsyncStorage
  const memberId = await getDataFromStorage('memberId');
  return makeAuthenticatedRequest('/challenges/club-challenges', memberId);
}

const getBuddiesJoinedChallenges = () => client.get("/challenges");
//const getClubChallenges = () => client.get("/challenges");
const getAllChallenges = () => client.get("/challenges");

const getUserJoinedChallenges = () => client.get("/challenges");
const getChallengesByMe = () => client.get("/challenges");

const getSearch = (query) => client.get(`/challenges/${query}`);

const getDetailsChallengeScreen = (challengeId) =>
  client.get(`/challenges/${challengeId}`);
const getJoinedChallengeScreen = (challengeId) =>
  client.get(`/challenges/${challengeId}`);

const createChallenge = (challenge, onUploadProgress) => {
  // content-type when we send json object to the server
  // content type is automatically set to application/json
  // multipart/form-data for when we send files-img to the server
  const data = new FormData();
  data.append("image", {
    name: "image",
    type: "image/jpeg",
    uri: challenge.image,
  });
  data.append("workout", challenge.workout);
  data.append("base", challenge.base);
  // data.append("goalFrequency", challenge.goalFrequency);
  // data.append("goalTime", challenge.goalTime);
  if (challenge.goalFrequency)
    data.append("goalFrequency", JSON.stringify(challenge.goalFrequency));
  if (challenge.goalTime) data.append("goalTime", challenge.goalTime);
  data.append("start", challenge.start);
  data.append("end", challenge.end);
  data.append("name", challenge.name);
  data.append("description", challenge.description);

  return client.post("/myChallenges", data, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

export default {
  createChallenge,
  getBuddiesJoinedChallenges,
  getClubChallenges,
  getAllChallenges,
  getUserJoinedChallenges,
  getChallengesByMe,
  getDetailsChallengeScreen,
  getJoinedChallengeScreen,
  getSearch,
};
