import { Modal } from "@/components";
import { Button, Typography } from "@/components/ui";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export const LogoutButton = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => setModalVisible(false);

    return <View style={[styles.container]}>
        <Pressable style={[styles.trigger]} onPress={() => setModalVisible(true)}>
            <Typography color="#991B1B" variant="p2">
                Выйти из аккаунта
            </Typography>
        </Pressable>
        <Modal modalVisible={modalVisible} closeModal={closeModal}>
            <View style={[styles.logoutContainer]}>
                <Typography center variant="h2">Выйти</Typography>
                <Typography color={Colors.light.notSelected} center variant="p2">Вы уверены, что хотите выйти? Для дальнейшего использования приложения потребуется снова войти в систему.</Typography>
                <View style={[styles.btns]}>
                    <Button onPress={closeModal} style={[styles.btn]} variant="outline">Отмена</Button>
                    <Button style={[styles.btn]} variant="primary">Выйти</Button>
                </View>
            </View>
        </Modal>
    </View>
}
const styles = StyleSheet.create({
    container: {
        borderBottomColor: Colors.light.borderColor,
        borderBottomWidth: 1.5
    },
    trigger: {
        height: 80,
        paddingLeft: 20,
        justifyContent: 'center'
    },
    logoutContainer: {
        gap: 10
    },
    btns: {
        flexDirection: 'row',
        gap: 8,
    },
    btn: {
        flex: 1
    }
})
