import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";

import { useRoute } from "./router";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../myRNProject/assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const routing = useRoute(true);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>{routing}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
