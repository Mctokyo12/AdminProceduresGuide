import { Stack, ThemeProvider } from "expo-router";
import "../../global.css";
import { StatusBar } from "react-native";
import { NAV_THEME } from "@/lib/theme";
import { useColorScheme } from 'nativewind';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const scheme = colorScheme ?? 'light';

  return (
    <ThemeProvider value={NAV_THEME[scheme]}>
      <StatusBar barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'} />
      <Stack />
    </ThemeProvider>
  );
}
