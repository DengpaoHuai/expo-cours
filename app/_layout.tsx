import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Button } from "react-native";
import { Config, getConfig } from "@/features/config/api/get-config";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [theme, setTheme] = useState<Config>();

  useEffect(() => {
    getConfig().then((config) => {
      setTheme(config.data);
    });
  }, []);

  useEffect(() => {
    if (loaded && theme) {
      SplashScreen.hideAsync();
    }
  }, [loaded, theme]);

  if (!loaded && theme) {
    return null;
  }

  return (
    <>
      <ThemeProvider
        value={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            primary: theme?.theme.primaryColor as string,
            background: theme?.theme.secondaryColor as string,
            card: theme?.theme.tertiaryColor as string,
            text: theme?.theme.primaryTextColor as string,
            border: theme?.theme.quaternaryColor as string,
          },
        }}
      >
        <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen
            name="(tabs_menus)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="+not-found" />
          <Stack.Screen
            name="(settings)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </ThemeProvider>
      <StatusBar style="dark" />
    </>
  );
}
