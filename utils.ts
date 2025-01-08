import * as ImagePicker from 'expo-image-picker';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
export const pickImage = async (saveSelected: (value: string[]) => void) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'],
        allowsMultipleSelection: true,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
    });


    if (!result.canceled) {
        saveSelected(result.assets.map(asset => asset.uri));
    }
};

export function hexToRgba(hex: string, alpha = 1) {
    // Ensure hex is in proper format (e.g., "#RRGGBB")
    hex = hex.replace('#', '');

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);


    console.log(`rgba(${r},${g},${b},${alpha})`)
    return `rgba(${r},${g},${b},${alpha})`;
}
export const GetTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0'); // Ensures 2 digits
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Ensures 2 digits

    const time = `${hours}:${minutes}`;
    return time
}
export const GetDate = (date: Date) => {

    const day = date.getDate().toString().padStart(2, '0'); // Ensures 2 digits for day
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed (0 = January, 11 = December)
    const year = date.getFullYear();

    const result = `${day}.${month}.${year}`;
    return result
}
export const rS = (value: number) => {
    return scale(value)
}
export const rV = (value: number) => {
    return verticalScale(value)
}
export const rMS = (value: number, factor?: number) => {
    return moderateScale(value, factor)
}

export function formatPhoneNumber(phone: string) {
    // Ensure the input is a string
    const cleaned = phone.toString().replace(/\D/g, ''); // Remove non-numeric characters

    // Check if the phone number has the correct length
    if (cleaned.length !== 11 || !cleaned.startsWith('7')) {
        throw new Error('Invalid phone number format');
    }

    // Format the phone number
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9, 11)}`;
}
