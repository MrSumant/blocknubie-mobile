import React, { useState } from "react";
import { connect } from "react-redux";
import { forgotPasswordRequest } from "../reducers/Actions/authActions";
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

const ForgotPasswordView = ({forgotPasswordRequest, auth, navigation}) => {
    
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        forgotPasswordRequest({
            email,
        });
    };

    const validate = () =>
        email.length > 0 &&
        validateEmail(email);

    const {
        passwordresetting,
        passwordreset,
        passwordresetError,
    } = auth;

    const passwordresetSuccess =
        passwordreset ? navigation.navigate("ConfirmForgotPassword") : null;

    const errorText =
        !passwordresetting && passwordresetError ? (
            <View>
                <ErrorMessage messageId={passwordresetError.id} />
            </View>
        ) : null;

    return (
        <ScrollView style={classes.container}>
        <Image style={classes.stretch} source={logo} />
        <Form style={styles.loginForm}>
            <Item rounded style={styles.input}>
              <Icon
                active
                style={styles.label}
                name="user-o"
                type="FontAwesome"
              />
              <Input
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                autoFocus={true}
                placeholder="Username"
              />
            </Item>
            <Item>{errorText}</Item>
            </Form>
            <Button full style={classes.button}
                onPress={() => handleSubmit()}
                disabled={passwordresetting || !validate()}
            >
                <Text style={classes.buttonText}>Send Code</Text>
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
      alignItems: "center",
    },
  });
  
  const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: { email: any; }; }) => any) => ({
    forgotPasswordRequest: ({ email }) =>
      dispatch(forgotPasswordRequest({ email })),
  });
  
  const mapStateToProps = ({ auth }) => ({ auth });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordView);
  