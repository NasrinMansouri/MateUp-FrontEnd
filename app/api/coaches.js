import client from "./client";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to retrieve data from AsyncStorage
const getDataFromStorage = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(`Error retrieving ${key}:`, error);
    return null;
  }
};

// Function to make authenticated API requests
const makeAuthenticatedRequest = async (url, options = {}) => {
  try {
    const userToken = await getDataFromStorage('userToken');

    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${userToken}`
    };

    return client.get(url, { ...options, headers });
  } catch (error) {
    console.error(`Error making authenticated request to ${url}:`, error);
    throw error;
  }
};

const getmeetAllCoaches = async () => {
  try {
    return makeAuthenticatedRequest(`/trainers`);
  } catch (error) {
    console.error('Error getting trainers:', error);
    throw error;
  }
};

const getCoachesClubMembers = async () => {
  try {
    // Fetch the current user's details including home_club_address
    const memberId = await getDataFromStorage('memberId');
    console.log('memberId:', memberId);

    const currentUserResponse = await client.get(`/member/${memberId}`);
    console.log('currentUserResponse:', currentUserResponse);

    const currentUser = currentUserResponse.data.member;
    console.log('currentUser:', currentUser);
    const homeClubAddress = currentUser.home_club_address;
    console.log("homeClubAddress", homeClubAddress)

    // Fetch all trainers
    const response = await client.get(`/trainers`);
    // Check if response contains the trainers data
    if (!response.data || !response.data.trainers) {
      throw new Error('No trainers data found in response');
    }

    // Filter trainers based on home_club_address
    const trainers = response.data.trainers.filter(trainer => {
      if (trainer.home_club_address) {
        return trainer.home_club_address === currentUser.home_club_address;
      }
      return false;
    });
    console.log('Location filtered trainers:', trainers);

    return trainers;
  } catch (error) {
    console.error('Error getting trainers:', error);
    throw error;
  }
};

const getCoachesProfile = async (trainerId) => {
  try {
    const response = await makeAuthenticatedRequest(`/trainer/${trainerId}`);
    console.log(response); // This should log the response
    return response; // Return the response to the caller
  } catch (error) {
    console.error('Error getting trainer profile:', error);
    throw error;
  }
};



// const getCoachesClubMembers = () => client.get("/trainers");
// const getmeetAllCoaches = () => client.get("/trainers");
//const getCoachesProfile = (trainerId) => client.get(`/trainers/${trainerId}`);

export default {
  getCoachesClubMembers,
  getmeetAllCoaches,
  getCoachesProfile,
};
