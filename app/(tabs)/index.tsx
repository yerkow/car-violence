import { NewsList, ScreenContainer, Search } from "@/components";
import { Card, Typography } from "@/components/ui";
import { mockCardData } from "@/constants/Colors";
import { rS, rV } from "@/utils";
import { Tabs } from "expo-router";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from "react-native";


export default function HomeScreen() {

    return (
        <ScreenContainer style={[styles.container]} >
            <Tabs.Screen options={{ header: () => <Search /> }} />
            <SafeAreaView >
                <ScrollView contentContainerStyle={[styles.container]} showsVerticalScrollIndicator={false}>
                    <NewsList />
                    <Typography center variant="h2">Последние нарушения</Typography>
                    {mockCardData.map((item) => <Card link={'/'} variant="base" key={item.title} style={[styles.violences]} {...item} />)}
                </ScrollView>
            </SafeAreaView>
        </ScreenContainer >
    );
}

const styles = StyleSheet.create({
    container: {
        gap: rS(20),
    },
    violenceContainer: {
        width: rS(400),
        gap: rS(10)
    },
    violences: {
        width: Dimensions.get('window').width - 40,
        height: rV(300)
    },
});
