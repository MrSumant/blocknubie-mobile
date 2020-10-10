import React, { Component } from "react";
import { connect } from "react-redux";
import { welcomeStartRequest } from "../reducers/Actions/authActions";

import classes from "../assets/CSS/RegisterLoginViewStyle";
import { Container, Content, Text } from "native-base";
import { View, Image, StyleSheet } from "react-native";
const logo = require("../assets/images/Blocknubie-logo.png");

const WelcomeScreen = ({
  navigation,
  welcomeStartRequest,
  welcomed,
  email,
}) => {
  const handleNext = (event) => {
    event.preventDefault();
    welcomeStartRequest();
  };

  if (welcomed) {
    navigation.push("/basic-information");
  }
  return (
    <Container>
      <Content>
        <View style={classes.centerContainer}>
          <Image style={[classes.image, styles.marginLogo]} source={logo} />
          <Text style={[classes.h2, styles.marginLogo]}>Welcome {email}!</Text>
          <Text style={[classes.h2, styles.marginLogo]}>
            Let's get you started...
          </Text>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  marginLogo: {
    marginVertical: 20,
    marginBottom: 20,
  },
});

const mapStateToProps = (state) => ({
  welcomed: state.auth.welcomed,
  authenticated: state.auth.authenticated,
  email: state.auth.email,
});

const mapDispatchToProps = (dispatch) => ({
  welcomeStartRequest: () => dispatch(welcomeStartRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
