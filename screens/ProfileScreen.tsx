import React, { memo } from "react";
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
import { View } from "react-native";
import classes from "../assets/css/RegisterLoginViewStyle";
const ProfileScreen = memo(() => {
  const options = [
    {
      text: "Update Health Record",
      icon: "edit",
      type: "FontAwesome",
    },
    {
      text: "View Health History",
      icon: "history",
      type: "FontAwesome5",
    },
    {
      text: "Family Members",
      icon: "people-outline",
      type: "Ionicons",
    },
    {
      text: "Settings",
      icon: "setting",
      type: "AntDesign",
    },
    {
      text: "Account details",
      icon: "account-details-outline",
      type: "MaterialCommunityIcons",
    },
  ];
  return (
    <View>
      {options.map((t) => {
        return (
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "white" }}>
                <Icon
                  active
                  name={t.icon}
                  type={t.type}
                  style={{ color: "blue" }}
                />
              </Button>
            </Left>
            <Body>
              <Text>{t.text}</Text>
            </Body>
            <Right>
              <Icon active name="chevron-right" type="FontAwesome5" />
            </Right>
          </ListItem>
        );
      })}
    </View>
  );
});

export default ProfileScreen;
