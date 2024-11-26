import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { getConfig } from "@/features/config/api/get-config";
import useConfigStore from "@/stores/config-store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const { config, setConfig } = useConfigStore();

  useEffect(() => {
    getConfig()
      .then((config) => {
        setConfig(config.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (loaded && config) {
      SplashScreen.hideAsync();
    }
  }, [loaded, config]);

  if (!loaded && config) {
    return null;
  }

  return (
    <>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>*/}

      <ThemeProvider
        value={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            primary: config?.theme.primaryColor as string,
            background: config?.theme.secondaryColor as string,
            card: config?.theme.tertiaryColor as string,
            text: config?.theme.primaryTextColor as string,
            border: config?.theme.quaternaryColor as string,
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
      {/*</PersistGate>
      </Provider> */}
    </>
  );
}
