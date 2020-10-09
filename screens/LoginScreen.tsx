import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signInRequest } from "../reducers/Actions/authActions";
import ErrorMessage from "../components/ErrorMessage";
import {View, Image} from "react-native";
import classes from "../assets/CSS/RegisterLoginViewStyle"; 

// import styles from "../../Assets/CommonStyle/RegisterLoginViewStyle";
// import theme from "../../Assets/CommonStyle/InputLabelStyle";

const logo = require("../assets/images/Blocknubie-logo.png");

class LoginView extends Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        this.props.signInRequest({
            email: this.state.email,
            password: this.state.password
        });
    };

    handleChange = ({ target: { id, value } }) =>
        this.setState({ [id]: value });

    validate = () =>
        this.state.email.length > 0 && this.state.password.length > 0 && this.state.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&/,><\’:;|_~`])\S{6,99}$/);

    render() {
        const { email, password } = this.state;

        const {
            signingIn,
            signInError,
            userUnconfirmed,
            authenticated
        } = this.props.auth;

        const successfulSignin = authenticated ? (
            this.props.navigation.navigate("welcome")
        ) : null;

        const notConfirmed =
            !signingIn && userUnconfirmed ? (
                this.props.navigation.navigate("confirm-account")
            ) : null;

        const errorText =
            !signingIn && signInError ? (
                <View>
                    <ErrorMessage messageId={signInError.id} />
                </View>
            ) : null;

        return (
            <View style={classes.root}>
                <Image
                    style={classes.stretch}
                    source={logo}
                />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: { email: any; password: any; }; }) => any) => ({
    signInRequest: ({ email, password }) =>
        dispatch(signInRequest({ email, password }))
});

// LoginView.propTypes = {
//     classes: PropTypes.object.isRequired,
//     auth: PropTypes.object.isRequired
// };

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginView);
