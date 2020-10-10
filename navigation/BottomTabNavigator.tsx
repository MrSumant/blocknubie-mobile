import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { HomeNavigator } from "./HomeNavigator";

const LoginStack = createStackNavigator();

export function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: "Login" }}
      />
      <LoginStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerTitle: "Welcome" }}
      />
      <LoginStack.Screen
        name="Services"
        component={HomeNavigator}
        options={{ headerTitle: "Blocknubie Care" }}
      />
    </LoginStack.Navigator>
  );
}
