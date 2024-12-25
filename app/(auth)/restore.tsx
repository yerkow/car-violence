import { ScreenContainer } from "@/components";
import { RestoreForm } from "@/components/forms";
import { Typography } from "@/components/ui";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function Restore() {

    return <ScreenContainer style={[styles.container]}>
        <Tabs.Screen options={{ headerShown: true }} />
        <Typography variant="h2">Обновление пароля</Typography>
        <RestoreForm />
    </ScreenContainer>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    }
})
