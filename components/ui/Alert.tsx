import { Typography } from "@/components/ui/Typography"
import { Colors } from "@/constants/Colors"
import { FontAwesome5 } from "@expo/vector-icons"
import { StyleSheet, View, ViewProps } from "react-native"

interface AlertProps extends ViewProps {
    title: string,
    subtitle: string,
    variant: 'working' | 'waiting' | 'success' | 'rejected'

}
const icons = {
    working: {
        icon: <FontAwesome5 name="info" size={20} color={Colors.light.background} />,
        bgColor: Colors.light.status['3'],
        color: "#006FFD",
    },
    waiting: {
        icon: <FontAwesome5 name="exclamation" size={20} color={Colors.light.background} />,
        bgColor: Colors.light.status['1'],
        color: "#FFB37C"

    },
    success: {
        icon: <FontAwesome5 name="check" size={20} color={Colors.light.background} />,
        bgColor: Colors.light.status['2'],
        color: "#3AC0A0"
    },
    rejected: {
        icon: <FontAwesome5 name="exclamation" size={20} color={Colors.light.background} />,
        bgColor: Colors.light.status['0'],
        color: "#FF616D"

    },
}
export const Alert = ({ title, subtitle, variant, style, ...props }: AlertProps) => {
    return <View style={[style, styles.container, { backgroundColor: icons[variant].bgColor }]} {...props} >
        <View style={[styles.left]}>
            <View style={[styles.icon, { backgroundColor: icons[variant].color }]}>
                {icons[variant].icon}
            </View>
        </View>
        <View style={[styles.right]}>
            <Typography variant="h3">{title}</Typography>
            <Typography color={Colors.light.text} variant="p2">{subtitle}</Typography>
        </View>
    </View>

}
const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        height: 85,
        padding: 16,
        alignItems: 'center',
        flexDirection: 'row'
    },
    left: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: { flex: 10 },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 35, height: 35,
        borderRadius: 100
    }
})
