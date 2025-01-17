import { rGetNewsList } from "@/api/violence"
import { Card, Typography } from "@/components/ui"
import { rS, rV } from "@/utils"
import { useQuery } from "@tanstack/react-query"
import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, StyleSheet, View } from "react-native"


export const NewsList = () => {
    const { data, isLoading, error } = useQuery({ queryKey: ["news"], queryFn: async () => rGetNewsList(5) })
    console.log(data)
    return <View>
        {isLoading && <ActivityIndicator size={'large'} />}
        {error?.cause == 404 && <Typography variant="p2" color="green">Не найдено</Typography>}
        {error && <Typography variant="p2" color="red">Ошибка</Typography>}
        {data && <><Typography variant="h2">Последние новости</Typography>
            <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={[styles.newsContainer]} horizontal data={data} renderItem={({ item }) => <Card link={`/(tabs)/news/${item.id}`} style={[styles.news]} variant="base" title={item.title} desc={item.text} img={item.media[0]?.video_file} />}
                keyExtractor={(item) => item.id.toString()}
            /></>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        gap: rS(20),

    },
    newsContainer: {
        display: 'flex',
        minHeight: rV(230),
        gap: rS(20)
    },
    news: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2 - 30,
    },

})


