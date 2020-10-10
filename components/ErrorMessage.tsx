import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { messages } from "../reducers/Actions/errors";

const styles = StyleSheet.create({ error: { color: "#FF0000" } });

const ErrorMessage = (props) => {
  const { messageId } = props;
  const message = messages[messageId];

  return <Text style={styles.error}>{message}</Text>;
};

export default ErrorMessage;
