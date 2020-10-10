import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const HomeTab = createBottomTabNavigator();

export function HomeTabNavigator() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: "Login" }}
      />
      <HomeTab.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerTitle: "Welcome" }}
      />
    </HomeTab.Navigator>
  );
}
