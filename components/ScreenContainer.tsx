import { Colors } from "@/constants/Colors";
import Constants from "expo-constants";
import { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

export const ScreenContainer = ({ style, children }: { children: ReactNode } & ViewProps) => {
    return <View style={[styles.container, style]}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 20,
        backgroundColor: Colors.light.background,
        height: '100%',
    }
})
