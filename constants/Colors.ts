/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primaryLight = '#007AFF';
const tintColorDark = '#fff';

export const Colors = {
    light: {
        text: '#1E1E1E',
        background: '#fff',
        primary: primaryLight,
        notSelected: '#8B8C92',
        selected: primaryLight,
        slate200: "#F1F5F9",
        gray: "#d4d4d4"
    },
    dark: {
        text: '#ECEDEE',
        background: '#151718',
        tint: tintColorDark,
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
    },
};
