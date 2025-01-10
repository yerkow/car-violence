import { rGetMediaById } from "@/api/violence";
import { CustomHeader, ScreenContainer } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { Tabs, useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function Video() {
    const { id } = useLocalSearchParams()
    const { data, isLoading } = useQuery({
        queryKey: [`violence ${id}`], queryFn: async () => {
            console.log(id)
            const data = await rGetMediaById(parseInt(id as string))
            return data
        }
    })
    console.log(data, "DATA")
    return <ScreenContainer>
        <SafeAreaView>
            <ScrollView contentContainerStyle={[styles.container]}>
                <Tabs.Screen options={{ header: () => <CustomHeader title="Видео" /> }} />
                {/* <Alert title="Ожидается оплата" subtitle="Выплата будет отправлена на ваш счет" variant="rejected" /> */}
                <Image style={[styles.img]} source={{ uri: data?.videos[0].video_file }} />
                {/* <View style={[styles.textContainer]}> */}
                {/*     <Typography color={Colors.light.primary} variant="h2">{mockCardData[parseInt(id as string)].title}</Typography> */}
                {/*     <Typography variant="h3">{mockCardData[parseInt(id as string)].subtitle}</Typography> */}
                {/*     <Typography variant="p2">{mockCardData[parseInt(id as string)].desc}</Typography> */}
                {/* </View> */}
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
