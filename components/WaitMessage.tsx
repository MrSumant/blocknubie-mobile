import React, { memo } from "react";
import { Container, Content, Text } from "native-base";
import { View, Image, StyleSheet } from "react-native";
import classes from "../assets/css/RegisterLoginViewStyle";

const logo = require("../assets/images/Blocknubie-logo.png");

export default memo(function WaitMessage({ text }: { text: string[] }) {
  return (
    <View style={classes.root}>
      <Image style={[styles.image, styles.marginLogo]} source={logo} />
      <View style={styles.root}>
        {text.map((t, idx) => (
          <Text style={[classes.h2, styles.marginLogo]} key={idx}>
            {t}!
          </Text>
        ))}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  marginLogo: {
    marginVertical: 20,
    marginBottom: 20,
  },
  root: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F4F8F9",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 80,
    marginTop: 80,
  },
});
