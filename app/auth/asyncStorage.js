import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// Function to save data to AsyncStorage
export const saveToAsyncStorage = async (userToken, userId, memberId) => {
    try {
        // await the data to be saved
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('userId', userId);
        await AsyncStorage.setItem('memberId', memberId);
    } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
        throw error;
    }
};

// Function to retrieve data from AsyncStorage
export const getFromAsyncStorage = async (key) => {
    try {
        // await the data to be retrieved
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.error('Error getting data from AsyncStorage:', error);
        throw error;
    }
};
