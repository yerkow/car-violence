import { Typography } from "@/components/ui"
import { Colors } from "@/constants/Colors"
import Contants from 'expo-constants'
import { StyleSheet, View } from "react-native"
export const CustomHeader = ({ title }: { title: string }) => {
    return <View style={[styles.container]}>
        <Typography style={[styles.title]} center variant="h3">{title}</Typography>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: Contants.statusBarHeight,
        height: 52,
        backgroundColor: Colors.light.slate200,
        justifyContent: 'center'
    },
    title: {
        color: Colors.light.primary
    }
})
