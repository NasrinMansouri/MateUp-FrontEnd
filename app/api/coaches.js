import { makeAuthenticatedRequest, getDataFromStorage } from "./apiUtils";

// getMeetAllCoaches
const getMeetAllCoaches = async () => {
  try {
    // get all the trainers
    return makeAuthenticatedRequest('/trainers');
  } catch (error) {
    console.error('Error getting trainers:', error);
    throw error;
  }
};

// getCoachesClubMembers
const getCoachesClubMembers = async () => {
  try {
    // get the member ID from AsyncStorage
    const memberId = await getDataFromStorage('memberId');
    console.log('memberId:', memberId);

    // use the member ID to get the current user
    const currentUserResponse = await makeAuthenticatedRequest('/member', memberId);
    console.log('currentUserResponse:', currentUserResponse);

    // get the home club address from the current user
    const currentUser = currentUserResponse.data.member;
    console.log('currentUser:', currentUser);
    const homeClubAddress = currentUser.home_club_address;
    console.log("homeClubAddress", homeClubAddress);

    // get all the trainers
    const response = await makeAuthenticatedRequest('/trainers');

    // check if there are any trainers
    if (!response.data || !response.data.trainers) {
      throw new Error('No trainers data found in response');
    }

    // filter the trainers by home club address
    const trainers = response.data.trainers.filter(trainer => {
      return trainer.home_club_address === homeClubAddress;
    });
    console.log('getCoachesClubMembers:', trainers);

    return trainers;
  } catch (error) {
    console.error('Error getting trainers:', error);
    throw error;
  }
};

// getCoachesProfile
const getCoachesProfile = async (trainerId) => {
  try {
    // get the trainer profile
    const response = await makeAuthenticatedRequest(`/trainer/${trainerId}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('getCoachesProfile:', error);
    throw error;
  }
};

// getCoachesSessions
const getCoachesSessions = async (trainerId) => {
  try {
    // get the trainer sessions
    const response = await makeAuthenticatedRequest(`/group-sessions/${trainerId}`);
    console.log('getCoachesSessions:', response);
    return response;
  } catch (error) {
    console.error('Error getting trainer sessions:', error);
    throw error;
  }
}

export default {
  getCoachesClubMembers,
  getMeetAllCoaches,
  getCoachesProfile,
  getCoachesSessions,
};
