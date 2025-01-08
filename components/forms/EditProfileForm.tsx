import { customFetch } from "@/api"
import { Button, ImageInput, Input } from "@/components/ui"
import { Colors } from "@/constants/Colors"
import { useRouter } from "expo-router"
import { useState } from "react"
import { StyleSheet, View } from "react-native"

export const EditProfileForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        photo: "",
        name: "",
    })
    return <View style={[styles.container]}>
        <ImageInput label="Фото" value={formData.photo} setImage={(img) => setFormData({ ...formData, photo: img })} />
        <Input value={formData.name} onChangeText={value => setFormData({ ...formData, name: value })} label="ФИО" placeholder="Ваше ФИО" />
        <Button onPress={() => {
            customFetch({ method: "GET", path: "todos/1" })
        }}>Сохранить</Button>
    </View>
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 10,
    },
    rulesContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12
    },
    link: {
        color: Colors.light.primary
    }
})
