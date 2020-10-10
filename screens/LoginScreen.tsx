import React, { useState } from "react";
import { connect } from "react-redux";
import { signInRequest } from "../reducers/Actions/authActions";
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

const LoginView = ({ signInRequest, auth, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
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
    ? navigation.navigate("welcome")
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
    <Container>
      <Content>
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
          <Button
            full
            style={classes.button}
            onPress={(e: any) => handleSubmit(e)}
          >
            <Text style={classes.buttonText}>Login</Text>
          </Button>
        </ScrollView>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
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
