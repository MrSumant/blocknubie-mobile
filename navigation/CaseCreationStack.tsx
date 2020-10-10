import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const CaseCreationStack = createBottomTabNavigator();

export function CaseCreationNavigator() {
  return (
    <CaseCreationStack.Navigator>
      <CaseCreationStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: "Login" }}
      />
      <CaseCreationStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerTitle: "Welcome" }}
      />
    </CaseCreationStack.Navigator>
  );
}
