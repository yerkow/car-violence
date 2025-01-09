import { FormContainer } from "@/components/forms/FormContainer"
import { Button, Input } from "@/components/ui"
import { Colors } from "@/constants/Colors"
import { errorMsgs } from "@/consts"
import { RegisterDTO } from "@/types"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "expo-router"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { StyleSheet, View } from "react-native"

export const RestoreForm = () => {
    const [formData, setFormData] = useState({
        tel: "",
        password: "",
        confirmPassword: "",
    })
    const { mutateAsync: sendCode, isPending } = useMutation({
        mutationKey: ['restorePassword'], mutationFn: async () => { },
        onError: (e) => {
            console.log(e)
        }
    })
    const router = useRouter()
    const { handleSubmit, watch, formState: { errors }, control } = useForm<RegisterDTO & { confirmPassword: string }>({ mode: "onChange" })
    const [rulesConfirm, setRulesConfirm] = useState(false)
    const password = watch('password', '')
    const submit: SubmitHandler<any> = (data) => {
        console.log(data)
        sendCode(data.tel).then(() => {
            router.push(`/(auth)/confirmation?info=${JSON.stringify(data)}`)
        })
    }

    return <FormContainer><View style={[styles.container]}>
        <Input name="tel" control={control} input={{
            keyboardType: "number-pad", mask: "+7 (999) 999 99 99",
            placeholder: "+7 (777) 322 32 32"
        }} label="Номер телефона" rules={{ required: errorMsgs.required }} error={errors?.tel?.message} />
        <Input name="password" control={control} input={{ secureTextEntry: true, placeholder: "Старый пароль" }} label="Пароль"
            rules={{
                required: errorMsgs.required,
            }}
            error={errors.password?.message}
        />
        <Input rules={{
            required: errorMsgs.required,
            validate: {
                hasNumber: (value) =>
                    /\d/.test(value) || errorMsgs.register.hasNumber,
                hasUpperCase: (value) =>
                    /[A-Z]/.test(value) ||
                    errorMsgs.register.hasUpperCase,
                hasMinimumLength: (value) =>
                    value.length >= 8 ||
                    errorMsgs.register.hasMinimumLength
            },

        }} error={errors.confirmPassword?.message} name="confirmPassword" control={control} input={{ secureTextEntry: true, placeholder: "Ваш новый пароль" }} label="Новый пароль" />
        <Button>Обновить пароль</Button>
    </View></FormContainer>
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
