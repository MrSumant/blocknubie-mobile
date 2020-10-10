import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../assets/css/RegisterLoginViewStyle";
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
  H3,
  H2,
} from "native-base";
import { View, StyleSheet } from "react-native";
const logo = require("../assets/images/Blocknubie-logo.png");

const HomePageView = ({ navigation }) => {
  return (
    <View
      style={[
        styles.root,
        { marginHorizontal: 20, justifyContent: "space-between" },
      ]}
    >
      <View>
        <Button
          iconLeft
          full
          rounded
          style={[styles.marginBtn, styles.whiteBackground]}
          onPress={() => navigation.push("CreateCase")}
        >
          <Icon name="plus" type="FontAwesome5" style={styles.icon} />
          <H3>Create New Case</H3>
        </Button>
        <Button
          iconLeft
          full
          style={[styles.marginBtn, styles.whiteBackground]}
        >
          <Icon
            name="plus"
            type="FontAwesome5"
            style={[styles.icon, styles.disabled]}
          />
          <H3 style={styles.disabled}>Blocknubie Care Coming Soon</H3>
        </Button>
        <Button
          iconLeft
          full
          style={[styles.marginBtn, styles.whiteBackground]}
        >
          <Icon
            name="plus"
            type="FontAwesome5"
            style={[styles.icon, styles.disabled]}
          />
          <H3 style={styles.disabled}>Blocknubie Care Coming Soon</H3>
        </Button>
        <Button
          iconLeft
          full
          style={[styles.marginBtn, styles.whiteBackground]}
        >
          <Icon
            name="plus"
            type="FontAwesome5"
            style={[styles.icon, styles.disabled]}
          />
          <H3 style={styles.disabled}>Blocknubie Care Coming Soon</H3>
        </Button>
        <Button
          iconLeft
          full
          style={[styles.marginBtn, styles.whiteBackground]}
        >
          <Icon
            name="plus"
            type="FontAwesome5"
            style={[styles.icon, styles.disabled]}
          />
          <H3 style={styles.disabled}>Blocknubie Care Coming Soon</H3>
        </Button>
      </View>
      <Button
        danger
        full
        style={[
          styles.marginBtn,
          { marginBottom: 20, justifyContent: "center" },
        ]}
      >
        <H2 style={classes.buttonText}>Call Emergency Services</H2>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  marginBtn: {
    marginVertical: 20,
    justifyContent: "flex-start",
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  whiteBackground: {
    backgroundColor: "white",
  },
  marginSvc: { marginTop: 40 },
  icon: { color: "#2a9fd8", paddingRight: 10 },
  root: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#F4F8F9",
  },
  listItem: {
    marginTop: 20,
  },
  paddingBottom: {
    paddingBottom: 20,
  },
  disabled: {
    opacity: 0.4,
  },
});

export default HomePageView;
