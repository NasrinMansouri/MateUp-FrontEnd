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

// const getUserClubMembers = () => client.get("/members");
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

const getUserClubMembers = async () => {
  try {
    // Fetch the current user's details including home_club_address
    const memberId = await getDataFromStorage('memberId');
    console.log('memberId:', memberId);
    const currentUserResponse = await client.get(`/member/${memberId}`);
    console.log('currentUserResponse:', currentUserResponse);
    const currentUser = currentUserResponse.data.member;
    const homeClubAddress = currentUser.home_club_address;

    // Fetch members filtered by home_club_address
    const response = await client.get("/members")
    console.log(response)

    // Filter members based on home_club_address
    const filteredMembers = response.data.members.filter(member => {
      if (member.home_club_address) {
        return member.home_club_address === homeClubAddress;
      }
      return false;
    });

    console.log('Filtered members:', filteredMembers);

    return filteredMembers;
  } catch (error) {
    console.error('Error fetching matched club members:', error);
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
