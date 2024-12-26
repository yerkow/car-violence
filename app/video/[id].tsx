import { CustomHeader, ScreenContainer } from "@/components";
import { Alert, Typography } from "@/components/ui";
import { Colors, mockCardData } from "@/constants/Colors";
import { Tabs, useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

export default function Video() {
    const { id } = useLocalSearchParams()
    return <ScreenContainer>
        <SafeAreaView>
            <ScrollView contentContainerStyle={[styles.container]}>
                <Tabs.Screen options={{ header: () => <CustomHeader title="Видео" /> }} />
                <Alert title="Ожидается оплата" subtitle="Выплата будет отправлена на ваш счет" variant="rejected" />
                <Image style={[styles.img]} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTap_RlEEM-bglQ2bXxrKS8hZwpAq1TZ6cxOA&s' }} />
                <View style={[styles.textContainer]}>
                    <Typography color={Colors.light.primary} variant="h2">{mockCardData[parseInt(id as string)].title}</Typography>
                    <Typography variant="h3">{mockCardData[parseInt(id as string)].subtitle}</Typography>
                    <Typography variant="p2">{mockCardData[parseInt(id as string)].desc}</Typography>
                </View>
            </ScrollView>
        </SafeAreaView>
    </ScreenContainer>
}
const styles = StyleSheet.create({
    container: {
        gap: 20
    },
    img: {
        width: '100%',
        height: 400,
        borderRadius: 10
    },
    textContainer: {
        gap: 10
    }

})
