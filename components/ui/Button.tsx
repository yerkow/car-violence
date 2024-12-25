import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
interface ButtonProps extends PressableProps {
    children: ReactNode
}
export const Button = ({ children, ...props }: ButtonProps) => {
    const scale = useSharedValue(1); // Shared value for scaling

    // Animated style
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const handlePressIn = () => {
        scale.value = withSpring(1.1, { damping: 10, stiffness: 100 }); // Shrinks slightly
    };
    const handlePressOut = () => {
        scale.value = withSpring(1); // Returns to normal size
    };
    return <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} style={[styles.container, props.disabled && styles.disabled]} {...props}>
        <Animated.View style={[animatedStyle]}>
            <Text style={[styles.text]}>{children}</Text>
        </Animated.View>
    </Pressable>
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        borderRadius: 10,
        backgroundColor: Colors.light.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.light.background,
        fontSize: 14,
        fontWeight: 'bold'
    },
    disabled: {
        opacity: .6
    }
})
