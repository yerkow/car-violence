import { ReactNode } from "react"
import { Dimensions, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native"

export const CustomModal = ({ modalVisible, closeModal, children }: { modalVisible: boolean, closeModal: () => void, children: ReactNode }) => {
    return <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={closeModal} // For Android back button behavior
    >
        {/* Background overlay */}
        <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalOverlay}>
                {/* Modal content */}
                <TouchableWithoutFeedback>
                    <View style={styles.modalContent}>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    </Modal>

}
const styles = StyleSheet.create({

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: Dimensions.get('window').width - 30,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
})
