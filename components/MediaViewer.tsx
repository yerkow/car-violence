import { getFileType } from "@/utils";
import { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, View, ViewProps } from "react-native";

import { Video } from "@/components/Video";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import Constants from 'expo-constants';


interface MediaViewerProps extends ViewProps {
    media: string
    itemStyle: any
}
export const MediaViewer = ({ media, itemStyle, ...props }: MediaViewerProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const closeModal = () => setModalVisible(false);
    console.log(media)
    return <View style={[props.style]} {...props}>
        <Pressable onPress={() => setModalVisible(true)}>
            <View style={itemStyle}>
                {getFileType(media) == 'image' && <Image style={[styles.media]} source={{ uri: media }} />}
                {getFileType(media) == 'video' && <Video style={[styles.media]} source={media} />}
            </View>
        </Pressable>
        <Modal visible={modalVisible} onRequestClose={closeModal} animationType="fade"  >
            <Pressable onPress={closeModal}>
                <AntDesign color={Colors.light.primary} size={32} name="close" style={[styles.close]} />
            </Pressable>
            <View style={[styles.modal]}>
                {getFileType(media) == 'image' && <Image style={[styles.media]} source={{ uri: media }} />}
            </View>
        </Modal>
    </View>
}
const styles = StyleSheet.create({

    media: {
        width: '100%',
        height: '100%'
    },
    modal: {
        paddingTop: Constants.statusBarHeight,
    },
    close: {
        position: 'absolute',
        right: 10,
        top: 10
    }
})
