import { Typography } from '@/components/ui';
import { Colors } from '@/constants/Colors';
import { Entypo, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { usePathname, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Button, Platform, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type CameraModeType = 'picture' | 'video'
const CONTROLS_HEIGHT = 200

export function Camera({ setMedias, closeCameraOnEnd }: { setMedias: (media: string) => void, closeCameraOnEnd: () => void }) {
    const [cameraMode, setCameraMode] = useState<CameraModeType>('picture')
    const [facing, setFacing] = useState<CameraType>('back');
    const [isRecording, setIsRecording] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    const { width, height } = useWindowDimensions()
    const insets = useSafeAreaInsets()
    const path = usePathname()
    const router = useRouter()
    const cameraRef = useRef<CameraView>(null)

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text >We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
    async function capturePhoto() {
        try {
            let photo = await cameraRef.current?.takePictureAsync()
            console.log(photo)
            setMedias(photo?.uri ?? "")
            closeCameraOnEnd()
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <View style={[{ paddingBottom: insets.bottom }]}>
            <View style={[styles.container]}>
                <CameraView ref={cameraRef} style={[{ width, height: height - CONTROLS_HEIGHT }]} facing={facing} mode={cameraMode} >
                    <Pressable onPress={() => router.back()} style={[styles.close]}>
                        <MaterialCommunityIcons name='close' size={32} color='white' />
                    </Pressable>
                </CameraView>
                <Controls mode={cameraMode} setMode={mode => setCameraMode(mode)} capture={capturePhoto} />
            </View>

        </View>
    );
}

const Controls = ({ mode, setMode, capture }: { mode: CameraModeType, setMode: (mode: CameraModeType) => void, capture: () => Promise<void> }) => {
    return <View style={[styles.controls]}>
        <View style={[styles.topControls]}>
            <ImportBtn />
            <CaptureBtn mode={mode} capture={capture} />
            <FlipBtn />
        </View>
        <View style={[styles.bottomControls]}>
            <ModeSelector selected={mode} select={setMode} />
        </View>
    </View>

}
const CaptureBtn = ({ mode, capture }: { mode: CameraModeType, capture: () => Promise<void> }) => {
    return <View style={[styles.captureOuter]}>
        <Pressable onPress={capture} style={[styles.captureInner, { backgroundColor: mode == 'picture' ? "white" : "red" }]} />
    </View>
}
const FlipBtn = () => {
    return <View style={[styles.btn]}>
        <Pressable><FontAwesome6 name='arrows-rotate' size={24} color={Colors.light.background} /></Pressable>
    </View>

}
const ImportBtn = () => {
    return <View style={[styles.btn]}>
        <Pressable><Entypo name='image' size={24} color={Colors.light.background} /></Pressable>
    </View>

}

const modes: { label: string, value: CameraModeType }[] = [
    {
        label: "ФОТО", value: "picture"
    },
    {
        label: "ВИДЕО", value: "video"
    },
]

const ModeSelector = ({ selected, select }: { selected: CameraModeType, select: (mode: CameraModeType) => void }) => {
    const translateX = useSharedValue(0)
    const { width } = useWindowDimensions()
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        }
    })
    console.log(width)
    useEffect(() => {
        translateX.value = withSpring(selected == 'picture' ? 35 : -28, { duration: 1000, stiffness: 10, dampingRatio: 1 })
    }, [selected])


    return <Animated.View style={[styles.modeSelector, animatedStyle]} >
        {modes.map(mode => <Pressable onPress={() => select(mode.value)} key={mode.label}>
            <Typography color={selected == mode.value ? "#CD9C07" : Colors.light.background} variant='h3'>
                {mode.label}
            </Typography>
        </Pressable>)}
    </Animated.View>
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    controls: {
        paddingTop: 20,
        height: CONTROLS_HEIGHT,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: Platform.OS == 'ios' ? 'flex-start' : "center",
        gap: 20
    },
    close: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    topControls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    bottomControls: {
        width: '100%'
    },
    captureOuter: {
        width: 64, height: 64, backgroundColor: Colors.light.background, borderRadius: 100, justifyContent: 'center', alignItems: 'center'
    },
    captureInner: {
        width: 57, height: 57, backgroundColor: Colors.light.background, borderRadius: 100, borderWidth: 2, borderColor: 'black'
    },
    btn: {
        width: 56, height: 56, backgroundColor: 'rgba(255,255,255,.2)', borderRadius: 100, justifyContent: 'center', alignItems: 'center'
    },
    modeSelector: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        color: Colors.light.background,
        gap: 10,
    }
});
