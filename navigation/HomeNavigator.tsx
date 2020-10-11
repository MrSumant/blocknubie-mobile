import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CaseCreationNavigator } from "./CaseCreationStack";
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from "native-base";
import { ProfileNavigator } from "./ProfileNavigator";
const HomeTab = createBottomTabNavigator();

export function HomeNavigator() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        name="Services"
        component={CaseCreationNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} type="Ionicons" />
          ),
        }}
      />
      <HomeTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="profile" color={color} type="AntDesign" />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string; type: string }) {
  return (
    <Icon
      style={{ marginBottom: -3 }}
      {...props}
      name={props.name}
      type={props.type}
    />
  );
}
