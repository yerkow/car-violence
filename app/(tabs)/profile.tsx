import { CustomHeader, ListItem, LogoutButton, ProfileSection, ScreenContainer, UserBalance } from "@/components";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function Profile() {
    return <ScreenContainer style={[styles.container]}>
        <Tabs.Screen options={{ header: () => <CustomHeader showBack={false} title="Профиль" /> }} />
        <ProfileSection />
        <UserBalance />
        <ListItem href={'/'} title="Настройки" />
        <LogoutButton />
    </ScreenContainer>
}

const styles = StyleSheet.create({
    container: {
        gap: 20
    }
})
