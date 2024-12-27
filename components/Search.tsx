import { Typography } from "@/components/ui";
import { Colors } from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import Contants from 'expo-constants';
import { useState } from "react";
import { Dimensions, Modal, Pressable, StyleSheet, View } from "react-native";

export const Search = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const closeModal = () => setModalVisible(false);
    return <View style={[styles.container]}>
        <Pressable style={[styles.trigger]} onPress={() => setModalVisible(true)}>
            <FontAwesome5 name="search" size={20} color={Colors.light.primary} />
            <Typography color={Colors.light.notSelected} variant="p2">Введите номер нарушения...</Typography>
        </Pressable>
        <Modal visible={modalVisible} onRequestClose={closeModal} animationType="fade"  >
            <View style={[styles.modal]}>
                <Pressable onPress={closeModal}>
                    <Typography variant="h1">Hello</Typography>
                </Pressable>
            </View>
        </Modal>
    </View>
}
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        backgroundColor: Colors.light.slate200,
        marginTop: Contants.statusBarHeight,
        alignItems: 'center',
        paddingVertical: 10,
    },
    trigger: {
        height: 45,
        backgroundColor: Colors.light.background,
        borderColor: Colors.light.primary,
        borderWidth: 1,
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row', gap: 16
    },
    modal: {
        paddingTop: Contants.statusBarHeight
    }
})
