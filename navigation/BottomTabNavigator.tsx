import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ConfirmAccountScreen from "../screens/ConfirmAccountScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

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
        name="Register"
        component={RegisterScreen}
        options={{ headerTitle: "Register"}}
      />
      <LoginStack.Screen
        name="Confirm-Account"
        component={ConfirmAccountScreen}
        options={{ headerTitle: "Confirm Account"}}
      />
    </LoginStack.Navigator>
  );
}
