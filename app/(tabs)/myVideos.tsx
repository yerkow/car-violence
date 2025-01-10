import { rGetMediaList } from "@/api/violence";
import { CustomHeader, ScreenContainer } from "@/components";
import { Card, Typography } from "@/components/ui";
import { Colors } from "@/constants/Colors";
import { getFileType } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { Tabs } from "expo-router";
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";


export default function MyVideos() {
    const { data: medias, isLoading, isError } = useQuery({
        queryKey: ['myVideos'], queryFn: async () => {
            const data = await rGetMediaList()
            return data
        }
    })
    if (medias) {
        const type = getFileType(medias[0].videos[0].video_file)
        console.log(type)
    }
    return <ScreenContainer>
        <Tabs.Screen options={{ header: (props) => <CustomHeader showBack={false} title="Мои видео" /> }} />
        {isLoading ? <View>
            <ActivityIndicator />
        </View> : medias ?
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.container]}>
                    {medias.map(item => <Card itemId={item.id} subtitle={item.city} key={item.id} color={Colors.light.status['2']} variant="horizontal"
                        title={item.id.toString()} desc={item.description} img={item.videos[0].video_file}
                    />)}
                </ScrollView>
            </SafeAreaView>
            : <Typography variant="span" color="red">Ошибка</Typography>
        }
    </ScreenContainer>

}

const styles = StyleSheet.create({
    container: {
        gap: 10
    }
});
