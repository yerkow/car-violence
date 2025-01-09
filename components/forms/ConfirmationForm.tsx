import { rConfirmCode, rVerifyCode } from "@/api/auth";
import { Button, Typography } from "@/components/ui";
import { Colors } from "@/constants/Colors";
import { RegisterDTO } from "@/types";
import { showToast } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;
interface ConfirmationFormProps {
    userData: RegisterDTO
}
export const ConfirmationForm = ({ userData }: ConfirmationFormProps) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const router = useRouter()
    const { mutateAsync: verifyCode, isPending } = useMutation({

        mutationKey: ['verifyCode'], mutationFn: rVerifyCode,
        onSuccess: (data) => {
            console.log(data)
            showToast({ type: 'success', title: "Успешно", desc: "Вы зарегистрировались успешно" })
            router.push('/(auth)/login')
        },
        onError: (e) => {
            console.log(e)
        }
    })
    const submit = () => {
        verifyCode({ password: userData.password, phone_number: '+' + userData.tel, code: value, full_name: "1" })
    }
    return <View style={[styles.container]}>
        <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.code}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            testID="my-code-input"
            renderCell={({ index, symbol, isFocused }) => (
                <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
            )}
        />
        <AskCodeAgain tel={userData.tel} />
        <Button onPress={submit}>Продолжить</Button>
    </View>
}
const AskCodeAgain = ({ tel }: { tel: string }) => {
    const { mutateAsync: sendCode } = useMutation({
        mutationKey: ['sendConfirmCode'], mutationFn: (tel: string) => rConfirmCode({ tel }),
        onSuccess: () => {
            setTimer(60)
        },
        onError: (e) => {
            console.log(e)
        }
    })
    console.log(tel)
    const [timer, setTimer] = useState(60)
    const disabled = timer > 0
    useEffect(() => {
        if (timer <= 0) return;

        const interval = setInterval(() => {
            setTimer(prevSeconds => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer])
    return <Pressable onPress={() => sendCode(tel)} disabled={disabled} style={[styles.again]}
    >
        <Typography color={disabled ? Colors.light.notSelected : Colors.light.primary} style={[styles.center]} variant="p2">Отправить код заново {disabled && `через ${timer} секунд`}</Typography>
    </Pressable>

}
const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    rulesContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12
    },
    again: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 60,
        marginBottom: 20,
        backgroundColor: Colors.light.background,
        padding: 10,
        borderRadius: 10
    },
    pressed: {
        backgroundColor: Colors.light.primary,
    },
    center: {
        textAlign: 'center'
    },
    code: {
        maxWidth: 340,
        marginHorizontal: 'auto',
    },
    cell: {
        width: 48,
        height: 48,
        fontSize: 24,
        lineHeight: 42,
        borderWidth: 1,
        marginHorizontal: 4,
        borderRadius: 10,
        borderColor: Colors.light.borderColor,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: Colors.light.primary,
    },
})
