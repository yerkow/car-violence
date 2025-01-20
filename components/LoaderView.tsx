import { Colors } from "@/constants/Colors"
import { ActivityIndicator, StyleSheet, View } from "react-native"

export const LoaderView = () => {
    return <View style={[styles.container]}>
        <ActivityIndicator size={'large'} color={Colors.light.primary} />
    </View>
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
