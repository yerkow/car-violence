import { Typography } from "@/components/ui/Typography";
import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
interface ButtonProps extends PressableProps {
    variant: 'primary' | 'outline',
    children: ReactNode
}
export const Button = ({ children, variant = 'primary', style, ...props }: ButtonProps) => {
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
    return <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} style={[styles.container, props.disabled && styles.disabled, style as StyleProp<ViewStyle>, styles[variant]]} {...props}>
        <Animated.View style={[animatedStyle]}>
            <Typography variant="span" style={[styles[variant], styles.text]}>{children}</Typography>
        </Animated.View>
    </Pressable>
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        borderWidth: 0,
    },
    disabled: {
        opacity: .6
    },
    primary: {
        backgroundColor: Colors.light.primary,
        color: Colors.light.background,
    },
    outline: {
        backgroundColor: Colors.light.background,
        borderWidth: 1,
        borderColor: Colors.light.primary,
        color: Colors.light.primary,
    },
})
