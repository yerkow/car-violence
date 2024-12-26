import { Typography } from "@/components/ui/Typography";
import { Colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, StyleSheet, View, ViewProps } from "react-native";
interface CardProps extends ViewProps {
    variant: 'base' | 'horizontal',
    img: string,
    title: string,
    subtitle: string,
    color?: string,
    desc: string
}
export const Card = ({ variant = 'base', title, color, img, subtitle, desc, style, ...props }: CardProps) => {
    return <Link href={'/video/1'}><View style={[style, styles[variant], { backgroundColor: color }, styles.container,]} {...props}>
        <Image style={[{ width: "100%", height: '100%', borderRadius: 10, flex: 2 }, variant == 'horizontal' && styles.horizontalImg]} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTap_RlEEM-bglQ2bXxrKS8hZwpAq1TZ6cxOA&s' }} />
        <View style={[styles.textContainer, variant == 'horizontal' && styles.horizontalText]}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="span">{subtitle}</Typography>
            <Typography variant="p2">{desc.length > 40 ? desc.slice(0, 40) + "..." : desc}</Typography>
        </View>
        {variant == 'horizontal' &&
            <Entypo name="chevron-right" size={32} color={Colors.light.notSelected} style={[styles.icon]} />}
    </View></Link>
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    base: {
        flexDirection: 'column',
        gap: 10,
        backgroundColor: Colors.light.slate200,

    },
    horizontal: {
        flexDirection: 'row',
        backgroundColor: Colors.light.slate200,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        gap: 10,
        height: 120
    },
    horizontalImg: {
        flex: 4,
        marginRight: 20
    },
    horizontalText: {
        flex: 8
    },
    icon: {
        flex: 1
    },
    textContainer: {
        gap: 5,
        paddingLeft: 5,
        flex: 1,
    },
})
