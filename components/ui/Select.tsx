import { Typography } from "@/components/ui/Typography";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, StyleSheet, View, ViewProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
interface SelectProps extends ViewProps {
    items: string[];
    value: string;
    onSelect: (value: string) => void
    placeholder?: string;
}
export const Select = ({ value, placeholder, onSelect, items, style, ...props }: SelectProps) => {
    const [show, setShow] = useState(false)
    const [height, setHeight] = useState(0)
    const h = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        return { height: h.value }
    })
    const onLayout = (e: LayoutChangeEvent) => {
        setHeight(e.nativeEvent.layout.height)
    }
    useEffect(() => {
        h.value = withSpring(show ? height : 0)
    }, [show])
    return <View style={[styles.container]}>
        <View style={[styles.label]}>
            <Typography variant="span">{value ? value : placeholder}</Typography>
            <Entypo name="chevron-right" />
        </View>
        <Animated.View style={[animatedStyle, styles.content]}>
            {items.map((item, idx) => <Pressable onPress={() => onSelect(item)} key={idx}>
                <Typography variant="p2">{item}</Typography>
            </Pressable>)}
        </Animated.View>
    </View>
}
const styles = StyleSheet.create({
    container: {

    },
    label: {},
    content: {}
})
