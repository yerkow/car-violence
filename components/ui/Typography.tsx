import { Colors } from "@/constants/Colors"
import { StyleSheet, Text, TextProps } from "react-native"

export const Typography = ({ variant, children, style, ...props }: TextProps & { variant: "h1" | "h2" | "h3" | "p1" | 'p2' | "span" }) => {
    return <Text style={[styles[variant], style]} {...props} >
        {children}
    </Text>
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 34,
    },
    h2: {
        fontSize: 24,
        fontWeight: "bold"

    },
    h3: {
        fontSize: 16,
        fontWeight: "bold"

    },
    p1: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.light.notSelected

    },
    p2: {
        fontSize: 16,
        color: Colors.light.notSelected

    },
    span: {
        fontSize: 14
    }
})
