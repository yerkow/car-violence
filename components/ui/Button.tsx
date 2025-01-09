import { Typography } from "@/components/ui/Typography";
import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { ActivityIndicator, Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
interface ButtonProps extends PressableProps {
    variant?: 'primary' | 'outline',
    children: ReactNode
    loading?: boolean;
}
export const Button = ({ loading, children, variant = 'primary', style, ...props }: ButtonProps) => {
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
    return <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} style={[styles.container, style as StyleProp<ViewStyle>, styles[variant], props.disabled && styles.disabled,]} {...props}>
        {loading ? <ActivityIndicator size={'large'} color={variant == 'primary' ? 'white' : Colors.light.primary} /> :
            <Animated.View style={[animatedStyle]}>
                <Typography variant="span" style={[styles[variant], styles.text, props.disabled && styles.disabled]}>{children}</Typography>
            </Animated.View>}
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
        backgroundColor: 'transparent'
    },
    disabled: {
        opacity: .8
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
