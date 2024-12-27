import { Camera } from "@/components";
import { Tabs } from "expo-router";

import { Typography } from "@/components/ui";
import Constants from "expo-constants";
import { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
type ViewType = 'camera' | 'form'

export default function Add() {
    const [medias, setMedias] = useState<string[]>([])
    const [view, setView] = useState<ViewType>('camera')
    return <View style={[styles.container]}>
        <Tabs.Screen options={{ headerShown: false }} />
        {view == 'camera' &&
            <Camera setMedias={media => setMedias([...medias, media])} closeCameraOnEnd={() => setView('form')} />}
        {view == 'form' && <View>
            <FlatList horizontal contentContainerStyle={{ gap: 20 }} data={medias} renderItem={({ item }) =>
                <Image source={{ uri: item }} style={{ width: 150, height: 150 * 16 / 9 }} />
            } />
            <Pressable onPress={() => setView('camera')}>
                <Typography color="white" variant="h3">
                    Open camera
                </Typography>
            </Pressable>

        </View>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'space-between',
        height: '100%'
    }
})
