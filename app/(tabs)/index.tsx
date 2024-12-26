import { ScreenContainer } from "@/components";
import { Card, Typography } from "@/components/ui";
import { mockCardData } from "@/constants/Colors";
import { Link } from "expo-router";
import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet } from "react-native";


export default function HomeScreen() {
    return (
        <ScreenContainer style={[styles.container]} >
            <Link href={'/(auth)/restore'}>restore</Link>
            <SafeAreaView >
                <ScrollView contentContainerStyle={[styles.container]}>
                    <Typography variant="h2">Последние новости</Typography>
                    <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={[styles.newsContainer]} horizontal data={mockCardData} renderItem={({ item }) => <Card style={[styles.news]} variant="base" {...item} />}
                        keyExtractor={(item) => item.title}
                    />
                    <Typography center variant="h2">Последние нарушения</Typography>
                    {mockCardData.map((item) => <Card variant="base" key={item.title} style={[styles.violences]} {...item} />)}
                </ScrollView>
            </SafeAreaView>
        </ScreenContainer >
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        paddingBottom: 30
    },
    violenceContainer: {
        width: 400,
        gap: 10
    },
    newsContainer: {
        display: 'flex',
        minHeight: 230,
        gap: 20
    },
    violences: {
        width: Dimensions.get('window').width - 40,
        height: 300
    },
    news: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2 - 30,
    },
});
