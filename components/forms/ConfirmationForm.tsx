import { Button, Typography } from "@/components/ui";
import { Colors } from "@/constants/Colors";
import { RegisterDTO } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;
interface ConfirmationFormProps {
    userData: RegisterDTO
}
export const ConfirmationForm = ({ userData }: ConfirmationFormProps) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    }); return <View style={[styles.container]}>
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
        <Pressable style={() => ([styles.again])}
        >
            <Typography style={[styles.center, styles.link]} variant="p2">Отправить код заново</Typography>
        </Pressable>
        <Button>Продолжить</Button>
    </View>
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
    link: {
        color: Colors.light.primary
    },
    center: {
        textAlign: 'center'
    },
    code: {
        maxWidth: 300,
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
