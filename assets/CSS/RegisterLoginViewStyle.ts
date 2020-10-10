import { StyleSheet } from "react-native";
import Dimensions from "../../constants/Layout";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 20,
  },

  popupFormRoot: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "100%",
    maxHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },

  paper: {
    display: "flex",
    minWidth: "100%",
    minHeight: "100vh",
  },

  popupFormPaper: {
    minWidth: "400px",
    minHeight: "80vh",
    padding: 2,
  },

  navPaper: {
    minWidth: "370px",
    minHeight: "600px",
    // padding: 2,
  },

  sliderContainer: {
    marginTop: "10%",
    maxWidth: "80%",
    maxHeight: "30vh",
    minWidth: "80%",
  },

  slider: {
    maxWidth: "80%",
  },

  textfield: {
    maxWidth: "75%",
    height: "45px",
    borderRadius: 20,
    paddingLeft: "20px",
    paddingRight: "20px",
  },

  desktopTextfield: {
    maxWidth: "100%",
    justifyContent: "center",
    height: "60px",
    borderRadius: 20,
    paddingLeft: "20px",
  },

  familyMembersButton: {
    width: "280px",
    borderRadius: 20,
    paddingLeft: "20px",
    marginBottom: "250px",
  },

  createCaseButton: {
    //width: "280px",
    // borderRadius: 20,
    // paddingLeft: "20px",
    // marginBottom: '250px'
    color: "#1261A0",
  },

  switch: {
    color: "white",
  },

  resendCodeButton: {
    borderRadius: 15,
    marginTop: "30px",
    width: "20%",
  },

  ccTextField: {
    width: "140px",
    marginLeft: "30px",
    marginRight: "20px",
    borderRadius: 20,
    paddingLeft: "20px",
    color: "transparent",
  },

  chip: {
    width: "80px",
    height: "35px",
    fontSize: 16,
    color: "#494e57",
  },

  logo: {
    height: "25vh",
    width: "25vh",
  },

  button: {
    borderRadius: 15,
    height: 40,
    color: "#1261A0",
    marginHorizontal: 20,
    marginVertical: 20,
  },

  addButton: {
    width: "30vw",
    marginBottom: "10vh",
    borderRadius: 15,
    height: "40px",
  },
  registerButton: {
    borderRadius: 15,
    width: "30%",
    height: "40px",
  },

  desktopRegisterButton: {
    borderRadius: 15,
    width: "55%",
    height: "50px",
  },

  logoutButton: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
    // marginLeft: 1),
    marginTop: 1,
    width: "10%",
    height: "40px",
  },

  confirmButton: {
    borderRadius: 15,
    width: "20%",
    height: "40px",
  },

  homeScreenButton: {
    width: "100%",
    marginTop: 1,
    borderRadius: 12,
  },

  uploadButton: {
    width: "50%",
    minHeight: "110px",
    marginTop: 1,
    borderRadius: 12,
  },
  emergencyButton: {
    width: "80%",
    marginTop: 8,
    color: "white",
    borderRadius: 12,
  },

  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },

  linkText: {
    margin: "20px",
  },
  title: {
    fontFamily: "Montserrat Semibold",
    fontSize: 36,
    marginTop: "-5vh",
  },

  menu: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  closebtn: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    borderRadius: 15,
    justifyContent: "flex-end",
    marginBottom: 3,
    marginLeft: 20,
  },

  removebtn: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    borderRadius: 15,
    justifyContent: "center",
    marginBottom: 3,
    marginLeft: 20,
  },

  settingmenu: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 1,
  },

  navMenuButton: {
    marginBottom: 1,
  },

  navMenuUser: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 1,
  },
  navMenuUserName: {
    padding: "5px",
  },

  formContainer: {
    marginTop: "-40px",
  },

  registerFormContainer: {
    marginTop: "-5vh",
  },

  link: {
    fontFamily: "Montserrat Semibold",
    fontSize: 14,
    color: "#121212",
  },
  subtitleText: {
    marginLeft: "35px",
  },
  stretch: {
    width: 200,
    height: 200,
    marginTop: 50,
    marginHorizontal: Dimensions.width * 0.3,
  },
  radio: {},
  checked: {},
  container: {
    backgroundColor: "#F4F8F9",
  },
  centerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  h1: {
    fontSize: 24,
  },
  h2: {
    fontSize: 22,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 18,
  },
  h5: {
    fontSize: 16,
  },
  h6: {
    fontSize: 14,
  },
});

export default styles;
