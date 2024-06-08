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

const getCoachesClubMembers = () => client.get("/trainers");
// const getmeetAllCoaches = () => client.get("/trainers");

const getCoachesProfile = (trainerId) => client.get(`/trainers/${trainerId}`);

export default {
  getCoachesClubMembers,
  getmeetAllCoaches,
  getCoachesProfile,
};
