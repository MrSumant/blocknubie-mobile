import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ProfileScreen from "../screens/ProfileScreen";

const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerTitle: "Profile" }}
      ></ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};
