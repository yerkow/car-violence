import { ScreenContainer } from "@/components";
import { RegisterForm } from "@/components/forms";
import { Typography } from "@/components/ui";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Register() {
    return <ScreenContainer style={[styles.container]}>
        <Tabs.Screen options={{ headerShown: false }} />
        <View style={[styles.titleContainer]}>
            <Typography variant="h2">Регистрация</Typography>
            <Typography variant="p2">Создайте учетную запись, чтобы начать.</Typography>
        </View>
        <RegisterForm />
    </ScreenContainer>
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        gap: 20
    },
    titleContainer: {
        display: 'flex',
        gap: 10
    }
})
