import { Button, Input, Typography } from "@/components/ui"
import { Colors } from "@/constants/Colors"
import { Link } from "expo-router"
import { useState } from "react"
import { StyleSheet, View } from "react-native"

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        tel: "",
        password: "",
    })
    return <View style={[styles.container]}>
        <Input keyboardType="number-pad" value={formData.tel} onChangeText={value => setFormData({ ...formData, tel: value })} mask="+7(999) 99 99 99" label="Номер телефона" placeholder="+7 (777) 322 32 32" />
        <Input secureTextEntry value={formData.password} onChangeText={value => setFormData({ ...formData, password: value })} label="Пароль" placeholder="Введите пароль" />
        <Link style={[styles.link]} href={'/'}>Забыли пароль?</Link>
        <Button>Войти</Button>
        <Typography style={{ marginTop: 10, textAlign: 'center' }} variant="span"> Нет аккаунта?  <Link style={[styles.link]} href={'/login'}>Зарегистрируйтесь</Link></Typography>
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
