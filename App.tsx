import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppRegistry } from "react-native";
import { registerRootComponent } from 'expo';

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Root } from "native-base";
import { Provider } from "react-redux";
import createStore from "./reducers/index";
import { SafeAreaProvider } from "react-native-safe-area-context";

const store = createStore();
console.log(store);
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
      <Provider store={store}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </Provider>
      </SafeAreaProvider>
    );
  }
}
