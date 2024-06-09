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

const getBuddyIds = async (userId) => {
  try {
    // Fetch current user's buddies
    const buddiesResponse = await client.get(`/buddy/list/${userId}`);
    const buddies = buddiesResponse.data.buddies;

    // Create a set of buddy IDs for fast lookup
    const buddyIds = new Set(buddies.map(buddy => buddy.id));
    return buddyIds;
  } catch (error) {
    console.error('Error fetching buddies:', error);
    throw error;
  }
};

const filterNonBuddies = (members, buddyIds) => {
  return members.filter(member => !buddyIds.has(member.id));
};

const getUserClubMembers = async () => {
  try {
    // Fetch the current user's member ID and user ID
    const memberId = await getDataFromStorage('memberId');
    const userId = await getDataFromStorage('userId');
    console.log('memberId of getUserClubMembers:', memberId);
    console.log('userId of getUserClubMembers:', userId);

    // Fetch the current member and their home_club_address
    const currentUserResponse = await client.get(`/member/${memberId}`);
    const currentUser = currentUserResponse.data.member;
    const homeClubAddress = currentUser.home_club_address;

    // Fetch all members
    const membersResponse = await client.get("/members");
    const allMembers = membersResponse.data.members;

    // Fetch current user's buddies
    const buddyIds = await getBuddyIds(userId);
    console.log('buddyIds:', buddyIds);

    // Filter members based on home_club_address and exclude buddies
    const filteredMembers = allMembers.filter(member => {
      return member.home_club_address === homeClubAddress && !buddyIds.has(member.id);
    });

    console.log('Location filtered and non-buddy members:', filteredMembers);

    return filteredMembers;
  } catch (error) {
    console.error('Error fetching matched club members:', error);
    throw error;
  }
};

const getMatchClubMembers = async () => {
  try {
    // Fetch the current user's member ID and user ID
    const memberId = await getDataFromStorage('memberId');
    const userId = await getDataFromStorage('userId');
    const currentUserResponse = await client.get(`/member/${memberId}`);
    const currentUser = currentUserResponse.data.member;

    // Fetch all members
    const response = await client.get("/members");
    const allMembers = response.data.members;

    // Fetch current user's buddies
    const buddyIds = await getBuddyIds(userId);

    // Extract workout types from the current user
    const currentUserWorkoutTypes = currentUser.workout_types.split(',').map(type => type.trim());

    // Filter members based on workout types and exclude buddies
    const filteredMembers = allMembers.filter(member => {
      // Extract workout types from each member
      const memberWorkoutTypes = member.workout_types.split(',').map(type => type.trim());

      // Check if any workout type of the current user exists in the member's workout types
      const matches = currentUserWorkoutTypes.some(type => memberWorkoutTypes.includes(type));

      return matches && !buddyIds.has(member.id);
    });

    console.log('Workout filtered and non-buddy members:', filteredMembers);

    return filteredMembers;
  } catch (error) {
    console.error('Error fetching matched club members:', error);
    throw error;
  }
};

const getConnectAllMembers = async () => {
  try {
    // Fetch the current user's userId
    const userId = await getDataFromStorage('userId');

    // Fetch all members
    const allMembersResponse = await client.get("/members");
    const allMembers = allMembersResponse.data.members;

    // Fetch current user's buddies
    const buddyIds = await getBuddyIds(userId);

    // Filter out members who are already buddies
    const filteredMembers = filterNonBuddies(allMembers, buddyIds);

    console.log('All non-buddy members:', filteredMembers);

    return filteredMembers;
  } catch (error) {
    console.error('Error fetching connect all members:', error);
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
  getMemberBuddies,
  getUser
};
