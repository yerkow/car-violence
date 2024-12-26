import { Typography } from "@/components/ui"
import { Colors } from "@/constants/Colors"
import { Entypo } from "@expo/vector-icons"
import Contants from 'expo-constants'
import { useRouter } from "expo-router"
import { Dimensions, Pressable, StyleSheet, View } from "react-native"
export const CustomHeader = ({ title, showBack = true }: { title: string, showBack?: boolean }) => {
    const router = useRouter()
    return <View style={[styles.container]}>
        {showBack && <Pressable style={[styles.back]} onPress={() => router.back()}>
            <Entypo name="chevron-left" size={32} color={Colors.light.primary} />
        </Pressable>
        }
        <Typography style={[styles.title]} center variant="h3">{title}</Typography>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        marginTop: Contants.statusBarHeight,
        height: 52,
        backgroundColor: Colors.light.slate200,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        color: Colors.light.primary
    },
    back: {
        position: 'absolute',
        left: 10
    }
})
