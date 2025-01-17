import { Colors } from "@/constants/Colors";
import Constants from "expo-constants";
import { ReactNode } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View, ViewProps } from "react-native";

export const ScreenContainer = ({ style, children, keyDismiss = true }: { children: ReactNode, keyDismiss?: boolean } & ViewProps) => {
    return <KeyboardFeedback dismiss={keyDismiss}><View style={[styles.container, style]}>{children}
    </View>
    </KeyboardFeedback>
}
const KeyboardFeedback = ({ dismiss, children }: { dismiss: boolean, children: ReactNode }) => {
    return dismiss ? <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback> : children
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 20,
        backgroundColor: Colors.light.background,
        height: '100%',
    }
})
