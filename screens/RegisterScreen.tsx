import React, { useState } from "react";
import { connect } from "react-redux";
import { registerRequest } from "../reducers/Actions/authActions";
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

const RegisterView = ({ registerRequest, auth, navigation }) => {
    const [email, setEmail] = useState("");
    const [fullName, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        registerRequest({
            email,
            password,
            fullName,
        });
      };

    const validate = () =>
        email.length > 0 &&
        password.length > 0 &&
        confirmPassword.length > 0 &&
        confirmPassword === password &&
        validateEmail(email) &&
        validatePassword(password);

    const { registering, registered, registrationError } = auth;

    if (registered) {
       navigation.navigate("ConfirmAccount")
    }
    
    const errorText =
            !registering && registrationError ? (
                <View>
                  <Text style={styles.errortext}>{registrationError}</Text>
                </View>
            ) : null;

    return (
                <ScrollView style={classes.container}>
                    <Image style={classes.stretch} source={logo} />
                    <Form style={styles.loginForm}>
                    <Item rounded style={styles.notsecureinput}>
                    <Input
                    onChangeText={(text) => setFullname(text)}
                    autoFocus={true}
                    placeholder="Full Name"
                    />
                    </Item>
                    <Item rounded style={styles.notsecureinput}>
                    <Input
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    placeholder="Email-Address"
                    />
                    </Item>
                    <Item rounded last style={styles.input}>
                    <Input
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    placeholder="Password"
                    />
                    </Item>
                    <Item rounded last style={styles.input}>
                    <Input
                    onChangeText={(text) => setConfirmpassword(text)}
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    />
                    </Item>
                    <Item>
                      {errorText}
                    </Item>
                </Form>
                <Button
                    full
                    style={classes.button}
                    onPress={(e: any) => handleSubmit(e)}
                >
                    <Text style={classes.buttonText}>Sign Up</Text>
                </Button>
                </ScrollView>
    )
};


const styles = StyleSheet.create({
    notsecureinput: {
        marginVertical: 10,
        marginRight: 20,
        marginLeft: 20,
        alignSelf: "center",
        paddingLeft: 20
    },

    errortext: {
      color: "#FF0000",
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
  
const mapDispatchToProps = (
    dispatch: (arg0: {
      type: string;
      payload: { email: any; password: any; fullName: any };
    }) => any
  ) => ({
    registerRequest: ({ email, password, fullName }) =>
      dispatch(registerRequest({ email, password, fullName })),
  });
  
const mapStateToProps = ({ auth }) => ({ auth });
  
export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
  