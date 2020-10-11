import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ConfirmAccountScreen from "../screens/ConfirmAccountScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { HomeNavigator } from "./HomeNavigator";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ConfirmForgotPasswordScreen from "../screens/ConfirmForgotPasswordScreen";

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
        name="ConfirmAccount"
        component={ConfirmAccountScreen}
        options={{ headerTitle: "Confirm Account"}}
      />
      <LoginStack.Screen
        name="Services"
        component={HomeNavigator}
        options={{ headerTitle: "Blocknubie Care" }}
      />
      <LoginStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerTitle: "Forgot Password"}}
      />
      <LoginStack.Screen
        name="ConfirmForgotPassword"
        component={ConfirmForgotPasswordScreen}
        options={{ headerTitle: "Confirm Forgot Password" }}
      />
    </LoginStack.Navigator>
  );
}
