import React, { useState } from "react";
import { connect } from "react-redux";
import { signInRequest } from "../reducers/Actions/authActions";
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
  H3,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const logo = require("../assets/images/Blocknubie-logo.png");

const LoginView = ({ signInRequest, auth, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    signInRequest({
      email,
      password,
    });
  };
  
  const validate = () =>
    email.length > 0 &&
    password.length > 0 &&
    validateEmail(email) &&
    validatePassword(password);

  const { signingIn, signInError, userUnconfirmed, authenticated } = auth;

  const successfulSignin = authenticated
    ? navigation.navigate("Welcome")
    : null;

  const notConfirmed =
    !signingIn && userUnconfirmed
      ? navigation.navigate("confirm-account")
      : null;

  if (!signingIn && signInError) {
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
            <Item rounded last style={styles.input}>
              <Icon active name="lock" type="Feather" />
              <Input
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
              />
            </Item>
          </Form>
          <Button full style={classes.button} onPress={() => handleSubmit()}>
            <Text style={classes.buttonText}>Login</Text>
          </Button>
          <Button full transparent
            onPress={() => navigation.navigate("Register")}
          >
            <H3>Create new account</H3>
          </Button>
          <Button full transparent
            //onPress={navigation.navigate("Register")}
          >
            <H3>Forgot password</H3>
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

const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    payload: { email: any; password: any };
  }) => any
) => ({
  signInRequest: ({ email, password }) =>
    dispatch(signInRequest({ email, password })),
});

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
