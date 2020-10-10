import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppRegistry } from "react-native";
import { registerRootComponent } from "expo";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import createStore from "./reducers/index";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Amplify } from "aws-amplify";
import { AmplifyConfig } from "./Config/amplify-config";

Amplify.configure({
  Auth: {
    region: AmplifyConfig.cognito.REGION,
    userPoolId: AmplifyConfig.cognito.USER_POOL_ID,
    identityPoolId: AmplifyConfig.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: AmplifyConfig.cognito.APP_CLIENT_ID,
  },
});

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
