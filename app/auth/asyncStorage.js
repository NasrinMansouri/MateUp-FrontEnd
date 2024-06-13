import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// Function to save data to AsyncStorage
export const saveToAsyncStorage = async (userToken, userId, memberId) => {
    try {
        // await previous data to be removed
        try {
            if (memberId) {
                await AsyncStorage.removeItem('memberId');
            }
            if (userId) {
                await AsyncStorage.removeItem('userId');
            }
            if (userToken) {
                await AsyncStorage.removeItem('userToken');
            }
        } catch (error) {
            throw new Error(`Error removing data from AsyncStorage: ${error.message}`);
        }

        // await the data to be saved
        try {
            if (userToken) {
                await AsyncStorage.setItem("userToken", userToken);
            }
            if (userId) {
                await AsyncStorage.setItem("userId", userId.toString());
            }
            if (memberId) {
                await AsyncStorage.setItem("memberId", memberId.toString());
            }
        } catch (error) {
            throw new Error(`Error saving data to AsyncStorage: ${error.message}`);
        }
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

// Function to check if a key exists in AsyncStorage and delete it if it does
export const checkAndDeleteKey = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            await AsyncStorage.removeItem(key);
            // console.log(`Key "${key}" and its data have been deleted.`);
        } else {
            // console.log(`Key "${key}" does not exist.`);
        }
    } catch (error) {
        console.error('Error accessing AsyncStorage:', error);
    }
};


// Function to clear all data from AsyncStorage
export const clearStorage = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        for (const key of keys) {
            await checkAndDeleteKey(key);
        }
        // console.log('All keys and their data have been checked and cleared if they existed.');
    } catch (error) {
        console.error('Error clearing AsyncStorage:', error);
    }
};


// Function to remove data from AsyncStorage
export const removeFromAsyncStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing data from AsyncStorage:', error);
        throw error;
    }
}