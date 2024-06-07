import { AsyncStorage } from 'react-native';

export const saveToAsyncStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error('Error saving to AsyncStorage:', error);
    }
};

export const getFromAsyncStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (!value) {
            return null;
        }
        console.log('Retrieved value from AsyncStorage:', value);
        return value;
    } catch (error) {
        console.error('Error retrieving from AsyncStorage:', error);
    }
};

// export const deleteFromAsyncStorage = async (key) => {
//     try {
//         await AsyncStorage.deleteItemAsync(key);
//     } catch (error) {
//         console.error('Error deleting from AsyncStorage:', error);
//     }
// };