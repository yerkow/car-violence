import * as ImagePicker from 'expo-image-picker';
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

