import React, { useState } from "react";
import { connect } from "react-redux";
import { confirmSignupRequest, resendCodeRequest } from "../reducers/Actions/authActions";
import ErrorMessage from "../components/ErrorMessage";
import { View, Image, Text, StyleSheet } from "react-native";
import classes from "../assets/CSS/RegisterLoginViewStyle";
import { validateEmail, validatePassword } from "../Utilities/Utility";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Label,
  Form,
  Icon,
  Button,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const logo = require("../assets/images/Blocknubie-logo.png");

const ConfirmAccountView = (auth, navigation) => {
    const [confirmationCode, setConfirmationCode] = useState("");
    const { email, confirmingSignup, signupConfirmed, confirmationError, resendingCode, codeResent } = auth;
    
    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        confirmSignupRequest({
            email,
            confirmationCode
        });
    };

    const handleResendCode = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        resendCodeRequest({ email })
    };

    const noEmailProvided = !email
        ? navigation.navigate("Login") : null;
    
    const successfullyConfirmed = !confirmingSignup & signupConfirmed 
        ? navigation.navigate("Login") : null;

    if (!confirmingSignup && confirmationError) {
    return (
        <View>
          <ErrorMessage messageId={signInError.id} />
        </View>
      );
    }
    
    return (
        <ScrollView style={classes.container}>
          <Image style={classes.stretch} source={logo} />
            <Form style={styles.loginForm}>
            <Item rounded style={styles.input}>
              <Input
                onChangeText={(text) => setEmail(text)}
                keyboardType="number-pad"
                autoFocus={true}
                placeholder="Confirmation Code"
              />
            </Item>
            </Form>
            <Button
                full
                style={classes.button}
                onPress={(e: any) => handleSubmit(e)}
            >
                <Text style={classes.buttonText}>Confirm Account</Text>
            </Button>
            <Button
                full transparent
                onPress={(e: any) => handleResendCode(e)}
            >
                <Text style={classes.buttonText}>Resend Code</Text>
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    boldText: {
      fontWeight: "bold"
    },

    input: {
      marginVertical: 10,
      marginRight: 20,
      marginLeft: 20,
      alignSelf: "center",
    },
    label: {
      paddingLeft: 25,
    },
    loginForm: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  });
  
const mapDispatchToProps = dispatch => ({
    confirmSignupRequest: ({ email, confirmationCode }) =>
      dispatch(confirmSignupRequest({ email, confirmationCode })), 
    resendCodeRequest: ({ email }) =>
      dispatch(resendCodeRequest({ email }))
});

  
const mapStateToProps = ({ auth }) => ({ auth });
  
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmAccountView);
  