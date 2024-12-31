import { Button } from "@/components/ui";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
interface VideoProps extends ViewProps {
    source: string
}
export const Video = ({ source, style, ...props }: VideoProps) => {
    const player = useVideoPlayer(source, player => {
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    return (
        <View style={[style, styles.container]}>
            <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
            <View style={styles.controlsContainer}>
                <Button
                    onPress={() => {
                        if (isPlaying) {
                            player.pause();
                        } else {
                            player.play();
                        }
                    }}
                >{isPlaying ? 'Pause' : 'Play'}</Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

    },
    video: {
        width: '100%',
        height: '100%'
    },
    controlsContainer: {}
})
