import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../assets/css/RegisterLoginViewStyle";
import { Content, Container, Button, Text } from "native-base";
import { View } from "react-native";
const logo = require("../../Assets/Logo/Blocknubie-logo.png");

const HomePageView = () => {
  return (
    <Container>
      <Content>
        <View style={classes.centerContainer}>
          <Button block light>
            <Text>Light</Text>
          </Button>
          <Button block>
            <Text>Primary</Text>
          </Button>
          <Button block success>
            <Text>Success</Text>
          </Button>
          <Button block info>
            <Text>Info</Text>
          </Button>
          <Button block warning>
            <Text>Warning</Text>
          </Button>
          <Button block danger>
            <Text>Danger</Text>
          </Button>
          <Button block dark>
            <Text>Dark</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default HomePageView;
