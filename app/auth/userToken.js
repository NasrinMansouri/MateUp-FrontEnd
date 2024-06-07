let userToken = null;

export const setUserToken = (token) => {
    userToken = token;
};

export const getUserToken = () => {
    return userToken;
};
