import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CaseCreationNavigator } from "./CaseCreationStack";
const HomeTab = createBottomTabNavigator();

export function HomeNavigator() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        name="Services"
        component={CaseCreationNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
