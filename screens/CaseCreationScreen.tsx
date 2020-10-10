import { Button, H2, Icon, Text, Textarea } from "native-base";
import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import classes from "../assets/css/RegisterLoginViewStyle";
import WaitMessage from "../components/WaitMessage";
import { caseConfirmRequest } from "../reducers/Actions/authActions";
const logo = require("../assets/images/Blocknubie-logo.png");

const CaseCreationScreen = memo(({ caseConfirm, navigation, auth }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [symptoms, setSymptoms] = useState("");
  const [details, setDetails] = useState("");
  const [uploads, setUploads] = useState("");
  const handleSubmit = () => {
    caseConfirm({
      symptoms: symptoms,
      details: details,
      uploads: uploads,
    });
    setConfirmed(true);
    setTimeout(() => {
      //   navigation.push();
    }, 5000);
  };

  const validate = () => symptoms.length > 0 && details.length > 0;

  return (
    <>
      {!confirmed && (
        <View style={[styles.root, { marginHorizontal: 20 }]}>
          <H2 style={styles.textBottomBorder}>Symptoms</H2>
          <Textarea
            rowSpan={8}
            bordered
            placeholder="No Symptoms added, Please add"
            style={styles.border}
            onChangeText={(e) => setSymptoms(e)}
            value={symptoms}
          />

          <Button transparent iconLeft>
            <Icon name="plus" type="FontAwesome5" style={styles.icon} />
            <Text>Add Uploads</Text>
          </Button>

          <Button rounded style={classes.button} onPress={() => handleSubmit()}>
            <H2 style={classes.buttonText}>Confirm</H2>
            <Icon
              name="chevron-right"
              type="FontAwesome5"
              style={[classes.buttonText, { marginLeft: 10 }]}
            />
          </Button>
        </View>
      )}
      {confirmed && (
        <WaitMessage
          text={[
            "Thank You.",
            "Please wait while your case is being accessed.",
          ]}
        />
      )}
    </>
  );
});

const styles = StyleSheet.create({
  icon: { color: "#2a9fd8" },
  root: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#F4F8F9",
  },
  textBottomBorder: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 30,
  },
  border: {
    marginVertical: 20,
    justifyContent: "flex-start",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
});

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    payload: { symptoms: any; details: any; uploads: any };
  }) => any
) => ({
  caseConfirm: ({ symptoms, details, uploads }) =>
    dispatch(caseConfirmRequest(symptoms, details, uploads)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CaseCreationScreen);
