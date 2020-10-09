import { Component } from "react";
// import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
// import { Text } from './Themed';
//import styles from "../assets/CSS/RegisterLoginViewStyle";
import { messages } from "../reducers/Actions/errors";
import { Text } from "native-base";

const styles = StyleSheet.create({ error: { color: "red" } });

const ErrorMessage = (props) => {

    const { messageId } = props;
    const message = messages[messageId];

    return (
        <Text style={styles.error}>{message}</Text>
    );
  }

// ErrorMessage.propTypes = {
//     messageId: PropTypes.symbol.isRequired,
//     classes: PropTypes.object.isRequired
// };

export default ErrorMessage;
