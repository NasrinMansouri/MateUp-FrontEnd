import challenge from "./challenge";
import client from "./client";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to retrieve data from AsyncStorage
const getDataFromStorage = async (key) => {
  try {
    // get the data from AsyncStorage
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(`Error retrieving ${key}:`, error);
    return null;
  }
};

// Function to make authenticated API requests
const makeAuthenticatedRequest = async (url, options = {}) => {
  try {
    // Get the user token from AsyncStorage
    const userToken = await getDataFromStorage('userToken');

    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${userToken}`
    };

    // Make the authenticated API request
    return client.get(url, { ...options, headers });
  } catch (error) {
    console.error(`Error making authenticated request to ${url}:`, error);
    throw error;
  }
};

// const getUserClubMembers = () => client.get("/members");
// const getMatchClubMembers = () => client.get("/members");
// const getConnectAllMembers = () => client.get("/members");

const getSearch = () => client.get("/members");

const getMembersProfile = async (memberId) => {
  try {
    // get the member
    return makeAuthenticatedRequest(`/member/${memberId}`);
  } catch (error) {
    console.error('Error getting member profile:', error);
    throw error;
  }
};


const getBuddies = async () => {
  try {
    // Fetch the member ID from AsyncStorage
    const memberId = await getDataFromStorage('memberId');
    console.log('Member ID in getBuddies:', memberId);

    // Fetch the member's buddies
    const response = await makeAuthenticatedRequest(`/buddy/list/${memberId}`, {
      Accept: 'application/json'
    });
    console.log('Buddies:', response);
    return response;
  } catch (error) {
    console.error('Error getting buddies:', error);
    throw error;
  }
};

const getMemberBuddies = async (memberId) => {
  try {
    // Fetch the member's buddies
    return makeAuthenticatedRequest(`/buddy/list/${memberId}`, {
      Accept: 'application/json'
    });
  } catch (error) {
    console.error('Error getting member buddies:', error);
    throw error;
  }
};

const getUser = async (userId) => {
  try {
    // get the current user
    return makeAuthenticatedRequest(`/user/${userId}`, {
      Accept: 'application/json'
    });
  } catch (error) {
    console.error('Error getting member user:', error);
    throw error;
  }
}

const getUserClubMembers = async () => {
  try {
    // Fetch the current user's details including home_club_address
    const memberId = await getDataFromStorage('memberId');
    console.log('memberId:', memberId);

    // Fetch the current member and their home_club_address
    const currentUserResponse = await client.get(`/member/${memberId}`);
    console.log('currentUserResponse:', currentUserResponse);
    const currentUser = currentUserResponse.data.member;
    const homeClubAddress = currentUser.home_club_address;

    // Fetch members
    const response = await client.get("/members")
    console.log(response)

    // Filter members based on home_club_address
    const filteredMembers = response.data.members.filter(member => {
      if (member.home_club_address) {
        return member.home_club_address === homeClubAddress;
      }
      return false;
    });

    console.log('Location filtered members:', filteredMembers);

    return filteredMembers;
  } catch (error) {
    console.error('Error fetching matched club members:', error);
    throw error;
  }
};

const getMatchClubMembers = async () => {
  try {
    // Fetch the current user's details including home_club_address
    const memberId = await getDataFromStorage('memberId');
    const currentUserResponse = await client.get(`/member/${memberId}`);
    const currentUser = currentUserResponse.data.member;

    // Fetch all members
    const response = await client.get("/members");

    // Extract workout types from the current user
    const currentUserWorkoutTypes = currentUser.workout_types.split(',').map(type => type.trim());

    // Filter members based on workout types
    const filteredMembers = response.data.members.filter(member => {
      // Extract workout types from each member
      const memberWorkoutTypes = member.workout_types.split(',').map(type => type.trim());

      // Check if any workout type of the current user exists in the member's workout types
      const matches = currentUserWorkoutTypes.some(type => memberWorkoutTypes.includes(type));

      return matches;
    });

    console.log('Workout filtered members:', filteredMembers);

    return filteredMembers;
  } catch (error) {
    console.error('Error fetching matched club members:', error);
    throw error;
  }
};

const getConnectAllMembers = async () => {
  try {
    // Fetch all members
    const allMembers = await client.get("/members");
    const response = allMembers.data.members;
    console.log('All members:', response);
    return response;
  } catch (error) {
    console.error('Error fetching connect all members:', error);
    throw error;
  }
}

export default {
  getBuddies,
  getUserClubMembers,
  getMatchClubMembers,
  getConnectAllMembers,
  getMembersProfile,
  getSearch,
  getMemberBuddies,
  getUser
};
