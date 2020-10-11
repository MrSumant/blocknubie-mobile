import React, { useState } from "react";
import { connect } from "react-redux";
import { confirmForgotPasswordRequest } from "../reducers/Actions/authActions";
import ErrorMessage from "../components/ErrorMessage";
import { View, Image, Text, StyleSheet } from "react-native";
import classes from "../assets/css/RegisterLoginViewStyle";
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

const ConfirmForgotPasswordView = ({confirmForgotPasswordRequest, auth, navigation}) => {
    const [confirmationCode, setConfirmationCode] = useState("");
    const [new_password, setPassword] = useState("");
    
    const { email, confirmingNewPassword, newPasswordConfirmed, errorNewPassword } = auth;
    
    const validate = () => confirmationCode.length > 5 &&
        new_password.length > 0 &&
        validatePassword(new_password);

    const handleSubmit = () => {
        confirmForgotPasswordRequest({
            email,
            confirmationCode,
            new_password,
        });   
    };
    
    const noEmailProvided = !email
        ? navigation.navigate("Login") : null;

    const errorText =
        !confirmingNewPassword && errorNewPassword ? (
            <View>
                <ErrorMessage messageId={errorNewPassword.id} />
            </View>
        ) : null;

    const successfullyConfirmed = !confirmingNewPassword && newPasswordConfirmed 
        ? navigation.navigate("Login") : null;
    
    return (
        <ScrollView style={classes.container}>
        <Image style={classes.stretch} source={logo} />
        <Form style={styles.loginForm}>
            <Item rounded style={styles.input}>
              <Input
                onChangeText={(text) => setConfirmationCode(text)}
                keyboardType="number-pad"
                autoFocus={true}
                placeholder="Confirmation Code"
              />
            </Item>
            <Item rounded last style={styles.input}>
              <Icon active name="lock" type="Feather" />
              <Input
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
              />
            </Item>
            <Item>
                {errorText}
            </Item>
        </Form>
        <Button full style={classes.button} 
          onPress={() => handleSubmit()}
          disabled={!validate()}
          >
            <Text style={classes.buttonText}>Confirm New Password</Text>
        </Button>
        </ScrollView>
    )
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
      alignItems: "center",
    },
  });
  
  const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: { email: any; confirmationCode: any; new_password: any; }; }) => any) => ({
    confirmForgotPasswordRequest: ({ email, confirmationCode, new_password }) =>
      dispatch(confirmForgotPasswordRequest({ email, confirmationCode, new_password })),
  });
  
  const mapStateToProps = ({ auth }) => ({ auth });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ConfirmForgotPasswordView);
  