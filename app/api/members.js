import { makeAuthenticatedRequest, getDataFromStorage } from "./apiUtils";

// Utility function to filter out buddies from a list of members
const filterNonBuddies = (members, buddyIds) => {
  return members.filter((member) => !buddyIds.has(member.id));
};

// getMembersBySearch
const getSearch = async () => {
  // get the member ID from AsyncStorage
  const memberId = await getDataFromStorage("memberId");
  return makeAuthenticatedRequest("/member/searching-members", memberId);
};

// getMembersProfile
const getMembersProfile = async (memberId) => {
  return makeAuthenticatedRequest("/member", memberId);
};

// getBuddies
const getBuddies = async () => {
  const memberId = await getDataFromStorage("memberId");
  return makeAuthenticatedRequest("/buddy/list", memberId);
};

// getMemberBuddies
const getMemberBuddies = async (memberId) => {
  return makeAuthenticatedRequest("/buddy/list", memberId);
};

// getUser
const getUser = async (userId) => {
  return makeAuthenticatedRequest("/user", userId);
};

// getUserClubMembers
const getUserClubMembers = async () => {
  const memberId = await getDataFromStorage("memberId");
  return makeAuthenticatedRequest("/member/club-members", memberId);
};

// getBuddyIds
const getBuddyIds = async (userId) => {
  try {
    // Get the list of buddies for the current user
    const buddiesResponse = await makeAuthenticatedRequest(
      "/buddy/list",
      userId
    );
    const buddies = buddiesResponse.data.buddies;

    // Create a set of buddy IDs for fast lookup
    const buddyIds = new Set(buddies.map((buddy) => buddy.id));
    return buddyIds;
  } catch (error) {
    console.error("Error fetching buddies:", error);
    throw error;
  }
};

// getMatchClubMembers
const getMatchClubMembers = async () => {
  const memberId = await getDataFromStorage("memberId");
  return makeAuthenticatedRequest(
    "/member/matching-workouts-members",
    memberId
  );
};

// getmembersYouMightKnow
const getmembersYouMightKnow = async () => {
  const memberId = await getDataFromStorage("memberId");
  return makeAuthenticatedRequest("/member/members-you-might-know", memberId);
};

// getConnectAllMembers
const getConnectAllMembers = async () => {
  const memberId = await getDataFromStorage("memberId");
  return makeAuthenticatedRequest("/member/connect-other-members", memberId);
};

export default {
  getBuddies,
  getUserClubMembers,
  getMatchClubMembers,
  getConnectAllMembers,
  getMembersProfile,
  getSearch,
  getMemberBuddies,
  getmembersYouMightKnow,
  getUser,
};
