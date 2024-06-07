import challenge from "./challenge";
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

const getUserClubMembers = () => client.get("/members");
const getMatchClubMembers = () => client.get("/members");
const getConnectAllMembers = () => client.get("/members");
const getSearch = () => client.get("/members");

const getMembersProfile = async () => {
  try {
    const memberId = await getDataFromStorage('memberId');
    return makeAuthenticatedRequest(`/member/${memberId}`);
  } catch (error) {
    console.error('Error getting member profile:', error);
    throw error;
  }
};

const getBuddies = async () => {
  try {
    return makeAuthenticatedRequest('/buddy/list');
  } catch (error) {
    console.error('Error getting buddies:', error);
    throw error;
  }
};

export default {
  getBuddies,
  getUserClubMembers,
  getMatchClubMembers,
  getConnectAllMembers,
  getMembersProfile,
  getSearch,
};
