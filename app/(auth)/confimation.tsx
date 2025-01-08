import { ScreenContainer } from "@/components";
import { ConfirmationForm } from "@/components/forms";
import { Typography } from "@/components/ui";
import { Colors } from "@/constants/Colors";
import { RegisterDTO } from "@/types";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Confirmation() {
    const params = useLocalSearchParams()
    const userData: RegisterDTO = JSON.parse(params.info as string)
    return <ScreenContainer style={[styles.container]}>
        <View style={[styles.textContainer]}>
            <Typography style={[styles.center]} variant="h2">Введите код подтверждения</Typography>
            <Typography style={[styles.center]} variant="p2">4-значный код
                был отправлен на номер {"\n"}
                <Typography variant="p2">+{userData.tel}</Typography></Typography>
        </View>
        <View style={[{ height: 300 }]}></View>
        <ConfirmationForm userData={userData} />
    </ScreenContainer>
}
const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    textContainer: {
        marginTop: 80
    },
    center: {
        textAlign: "center"
    },
    again: {
        color: Colors.light.primary
    }
})
