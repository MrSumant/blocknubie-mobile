import { Text } from "native-base";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import classes from "../assets/css/RegisterLoginViewStyle";
import WaitMessage from "../components/WaitMessage";
import { welcomeStartRequest } from "../reducers/Actions/authActions";

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

  setTimeout(() => {
    navigation.navigate("Services");
  }, 2500);

  return (
    <WaitMessage text={[`Welcome ${email}`, "Let's get you started..."]} />
  );
};

const mapStateToProps = (state) => ({
  welcomed: state.auth.welcomed,
  authenticated: state.auth.authenticated,
  email: state.auth.email,
});

const mapDispatchToProps = (dispatch) => ({
  welcomeStartRequest: () => dispatch(welcomeStartRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
