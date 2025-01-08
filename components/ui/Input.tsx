import { Typography } from "@/components/ui/Typography";
import { Colors } from "@/constants/Colors";
import { rS, rV } from "@/utils";
import { Feather } from '@expo/vector-icons';
import { useState } from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import { Pressable, StyleSheet, View } from "react-native";
import { MaskedTextInput, MaskedTextInputProps } from "react-native-mask-text";

interface InputProps {
    label: string
    required?: boolean
    bg?: 'light' | 'dark'
    name: string
    control: Control<any, any>
    input: Partial<MaskedTextInputProps>
    rules?: Omit<RegisterOptions<any, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined

}
export const Input = ({ rules, name, control, required = true, label, input: { secureTextEntry, onChangeText, ...inputProps } }: InputProps) => {
    const [focused, setFocused] = useState(false)
    const [secure, setSecure] = useState(secureTextEntry)
    return <Controller name={name} control={control} render={({ field: { onChange, value, onBlur } }) => {
        return <View style={[styles.container]}>
            <Typography variant="span">{label}
                {required && <Typography color="red" variant="span"> *</Typography>}
            </Typography>
            <MaskedTextInput onChangeText={(_, value) => onChange(value)} secureTextEntry={secure} placeholderTextColor={Colors.light.borderColor} onFocus={() => setFocused(true)} onBlur={() => {
                setFocused(false)
                onBlur()
            }} style={[styles.input, styles.base, focused && styles.focused]} {...inputProps} />
            {secureTextEntry &&
                <Pressable style={[styles.secureToggle]} onPress={() => setSecure(!secure)}>
                    <Feather size={20} name={secure ? "eye-off" : "eye"} />
                </Pressable>}
        </View>
    }} rules={rules} />
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        position: 'relative',
        gap: rS(7)
    },
    base: {
        borderColor: Colors.light.borderColor,
        backgroundColor: Colors.light.background,
        borderWidth: 1,
        paddingHorizontal: rS(16),
        borderRadius: 12,
        fontSize: rS(14)
    },
    textarea: {
        height: rV(72),
    },
    input: {
        height: rV(42),
    },
    focused: {
        borderWidth: 2,
        borderColor: Colors.light.primary,
    },
    secureToggle: {
        position: "absolute",
        right: rS(15),
        bottom: rS(15),
        zIndex: 20
    },
})
