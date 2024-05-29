import client from "./client";

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

export default { createChallenge };
