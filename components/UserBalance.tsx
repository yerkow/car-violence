import { Typography } from "@/components/ui"
import { Colors } from "@/constants/Colors"
import { Link } from "expo-router"
import { StyleSheet, View } from "react-native"

export const UserBalance = () => {
    return <View style={[styles.container]}>
        <Typography color={Colors.light.background} variant="h2">Доступный баланс:</Typography>
        <Typography color={Colors.light.background} variant="h1">1000 ₸</Typography>
        <View style={[styles.divider]} />
        <Link href={'/'} >
            <View style={[styles.link]}>
                <Typography center color={"#093875"} variant="h1">
                    Вывод
                </Typography>
            </View>
        </Link>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#093875",
        gap: 25,
        borderRadius: 10
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.light.background
    },
    link: {
        width: '100%',
        backgroundColor: "#AED5FC",
        paddingVertical: 17,
        borderRadius: 10
    }

})
