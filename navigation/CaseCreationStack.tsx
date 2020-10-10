import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import CaseCreationScreen from "../screens/CaseCreationScreen";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomePageView from "../screens/HomeScreen";
const CaseCreationStack = createStackNavigator();

export function CaseCreationNavigator() {
  return (
    <CaseCreationStack.Navigator>
      <CaseCreationStack.Screen
        name="Home"
        component={HomePageView}
        options={{ headerTitle: "Blocknubie Care" }}
      />
      <CaseCreationStack.Screen
        name="CreateCase"
        component={CaseCreationScreen}
        options={{ headerTitle: "Create Case" }}
      />
    </CaseCreationStack.Navigator>
  );
}
