import { makeAuthenticatedRequest, getDataFromStorage } from "./apiUtils";

// Utility function to filter out buddies from a list of members
const filterNonBuddies = (members, buddyIds) => {
  return members.filter(member => !buddyIds.has(member.id));
};

// --------------------- //

// getMembersBySearch
const getSearch = async () => {
  // get the member ID from AsyncStorage
  const memberId = await getDataFromStorage('memberId');
  return makeAuthenticatedRequest('/member/searching-members', memberId);
};

// getMembersProfile
const getMembersProfile = async (memberId) => {
  return makeAuthenticatedRequest('/member', memberId);
};

// getBuddies
const getBuddies = async () => {
  const memberId = await getDataFromStorage('memberId');
  return makeAuthenticatedRequest('/buddy/list', memberId);
};

// getMemberBuddies
const getMemberBuddies = async (memberId) => {
  return makeAuthenticatedRequest('/buddy/list', memberId);
};

// getUser
const getUser = async (userId) => {
  return makeAuthenticatedRequest('/user', userId);
};

// getUserClubMembers
const getUserClubMembers = async () => {
  const memberId = await getDataFromStorage('memberId');
  return makeAuthenticatedRequest('/member/club-members', memberId);
} 

// getBuddyIds
const getBuddyIds = async (userId) => {
  try {
    // Get the list of buddies for the current user
    const buddiesResponse = await makeAuthenticatedRequest('/buddy/list', userId);
    const buddies = buddiesResponse.data.buddies;

    // Create a set of buddy IDs for fast lookup
    const buddyIds = new Set(buddies.map(buddy => buddy.id));
    return buddyIds;
  } catch (error) {
    console.error('Error fetching buddies:', error);
    throw error;
  }
};

const getMatchClubMembers = async () => {
  const memberId = await getDataFromStorage('memberId');
  return makeAuthenticatedRequest('/member/matching-workouts-members', memberId);
}

// const getMatchClubMembers = async () => {
//   try {
  
//     // get the member ID and user ID from AsyncStorage
//     const memberId = await getDataFromStorage('memberId');
//     const userId = await getDataFromStorage('userId');

//     // use the member ID to get the current user
//     const currentUserResponse = await makeAuthenticatedRequest('/member', memberId);
//     const currentUser = currentUserResponse.data.member;

//     // get all the members
//     const membersResponse = await makeAuthenticatedRequest('/members');
//     const allMembers = membersResponse.data.members;

//     // get the buddy IDs for the current user
//     const buddyIds = await getBuddyIds(userId);

//     // get the workout types of the current user
//     const currentUserWorkoutTypes = currentUser.workout_types.split(',').map(type => type.trim());

//     // filter the members by workout type and non-buddy
//     const filteredMembers = allMembers.filter(member => {
//       const memberWorkoutTypes = member.workout_types.split(',').map(type => type.trim());
//       const matches = currentUserWorkoutTypes.some(type => memberWorkoutTypes.includes(type));

//       return matches && !buddyIds.has(member.id);
//     });

//     console.log('Workout filtered and non-buddy members:', filteredMembers);

//     return filteredMembers;
//   } catch (error) {
//     console.error('Error fetching matched club members:', error);
//     throw error;
//   }
// };

const getConnectAllMembers = async () => {
  try {
    // get the user ID from AsyncStorage
    const userId = await getDataFromStorage('userId');

    // get all the members
    const allMembersResponse = await makeAuthenticatedRequest('/members');
    const allMembers = allMembersResponse.data.members;

    // get the buddy IDs for the current user
    const buddyIds = await getBuddyIds(userId);

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
