
import { Colors } from "@/constants/Colors";
import Constants from "expo-constants";
import { Link, Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Onbording() {
    return <View style={[style.container]}>
        <Tabs.Screen options={{ headerShown: false }} />
        <Link href={'/'} style={{ width: '100%' }}>Back</Link>
    </View>
}


const style = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 20,
        backgroundColor: Colors.light.background,
        flexGrow: 1
    }
})

