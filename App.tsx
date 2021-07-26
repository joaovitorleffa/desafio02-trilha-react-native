import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./src/routes/app.routes";
import { LoginsStorageProvider } from "./src/hooks/storage";
import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <LoginsStorageProvider>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </LoginsStorageProvider>
    </NavigationContainer>
  );
}
