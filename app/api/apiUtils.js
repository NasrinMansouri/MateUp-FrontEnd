import apiClient from "./client";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to retrieve data from AsyncStorage
export const getDataFromStorage = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.error(`Error retrieving ${key}:`, error);
        return null;
    }
};

// Function to make authenticated API requests
export const makeAuthenticatedRequest = async (endpoint, id = null) => {
    try {
        const userToken = await getDataFromStorage('userToken');
        const url = id ? `${endpoint}/${id}` : endpoint;
        const response = await apiClient.get(url, {
            headers: {
                'Authorization': userToken,
            },
        });

        // console.log(`${endpoint}:`, response);
        return response;
    } catch (error) {
        console.error(`Error in ${endpoint}:`, error);
        throw error;
    }
};