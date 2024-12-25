import { Typography } from "@/components/ui/Typography";
import { Image, StyleSheet, View, ViewProps } from "react-native";

interface CardProps extends ViewProps {
    img: string,
    title: string,
    subtitle: string,
    desc: string
}
export const Card = ({ title, img, subtitle, desc, style, ...props }: CardProps) => {
    return <View style={[style]} {...props}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTap_RlEEM-bglQ2bXxrKS8hZwpAq1TZ6cxOA&s' }} style={[styles.img]} />
        <View style={[styles.textContainer]}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="span">{subtitle}</Typography>
            <Typography variant="p2">{desc.length > 40 ? desc.slice(0, 40) + "..." : desc}</Typography>
        </View>
    </View>
}
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '70%',
        borderRadius: 10,
    },
    textContainer: {
        gap: 5,
        paddingLeft: 10
    },
})
