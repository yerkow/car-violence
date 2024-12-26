import { Modal } from "@/components";
import { EditProfileForm } from "@/components/forms";
import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export const EditProfileButton = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => setModalVisible(false);
    return <View>
        <Pressable style={[styles.btn]} onPress={() => setModalVisible(true)}>
            <FontAwesome name="pencil" size={20} color={Colors.light.background} />
        </Pressable>
        <Modal modalVisible={modalVisible} closeModal={closeModal}><EditProfileForm /></Modal>
    </View>

}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.light.primary,
        width: 40, height: 40, justifyContent: 'center', alignItems: 'center',
        borderRadius: 100,
        position: 'absolute',
        bottom: -10,
        right: -20

    },
})
