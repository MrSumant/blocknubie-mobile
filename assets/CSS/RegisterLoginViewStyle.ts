import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },

    popupFormRoot: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        maxHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '100px'
    },

    paper: {
        display: 'flex',
        minWidth: '100%',
        minHeight: '100vh',
        backgroundColor: '#F4F8F9'
    },

    popupFormPaper: {
        minWidth: '400px',
        minHeight: '80vh',
        padding: 2
    },

    navPaper: {
        minWidth: "370px",
        minHeight: "600px",
        // padding: 2,
        backgroundColor: "#F4F8F9"
    },

    sliderContainer: {
        marginTop: '10%',
        maxWidth: '80%',
        maxHeight: '30vh',
        minWidth: '80%'
    },

    slider: {
        maxWidth: '80%'
    },

    textfield: {
        maxWidth: '75%',
        height: "45px",
        boxShadow: "5px 5px 5px #b3b3b3",
        borderRadius: 20,
        paddingLeft: '20px',
        paddingRight: '20px',
        background: "#F4F8F9",
    },

    desktopTextfield: {
        maxWidth: '100%',
        justifyContent: "center",
        height: "60px",
        boxShadow: "5px 5px 5px #b3b3b3",
        borderRadius: 20,
        paddingLeft: '20px',
        background: "#F4F8F9"
    },


    familyMembersButton: {

        width: "280px",
        boxShadow: "5px 5px 5px #b3b3b3",
        borderRadius: 20,
        paddingLeft: "20px",
        marginBottom: '250px'
    },

    createCaseButton: {

        //width: "280px",
        //boxShadow: "5px 5px 5px #b3b3b3",
        // borderRadius: 20,
        // backgroundColor: "#1261A0"
        // paddingLeft: "20px",
        // marginBottom: '250px'
        color: "#1261A0"
    },

    switch: {
        color: "default"
    },

    resendCodeButton: {
        borderRadius: 15,
        marginTop: '30px',
        backgroundColor: "#1261A0",
        width: "20%"
    },

    ccTextField: {
        width: "140px",
        marginLeft: "30px",
        marginRight: "20px",
        boxShadow: "5px 5px 5px #b3b3b3",
        borderRadius: 20,
        paddingLeft: "20px",
        color: "transparent"
    },

    chip: {
        boxShadow: "5px 5px 5px #b3b3b3",
        width: "80px",
        height: "35px",
        fontSize: '16px',
        color: '#494e57',
    },

    logo: {
        height: '25vh',
        width: '25vh'
    },

    button: {
        borderRadius: 15,
        height: "40px",
        backgroundColor: "#1261A0",
    },

    addButton: {
        width: '30vw',
        marginBottom: '10vh',
        borderRadius: 15,
        height: "40px",
        backgroundColor: "#1261A0",
    },
    registerButton: {
        borderRadius: 15,
        width: '30%',
        height: "40px",
        backgroundColor: "#1261A0",
    },

    desktopRegisterButton: {
        borderRadius: 15,
        width: '55%',
        height: "50px",
        backgroundColor: "#1261A0",
    },

    logoutButton: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 15,
        // marginLeft: 1),
        marginTop: 1,
        width: "10%",
        height: "40px",
        backgroundColor: "#1261A0",
        
    },

    confirmButton: {
        borderRadius: 15,
        width: "20%",
        height: "40px",
        backgroundColor: "#1261A0",
        
    },

    homeScreenButton: {
        width: "100%",
        marginTop: 1,
        borderRadius: "12px"
    },

    uploadButton: {
        width: "50%",
        minHeight: "110px",
        marginTop: 1,
        borderRadius: "12px"
    },
    emergencyButton: {
        width: "80%",
        marginTop: 8,
        backgroundColor: "red",
        color: "white",
        borderRadius: "12px"
    },

    buttonText: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        padding: "5px"
    },

    linkText: {
        margin: "20px"
    },
    title: {
        fontFamily: 'Montserrat Semibold',
        fontSize: "36px",
        marginTop: '-5vh'
    },

    menu: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between'
    },

    closebtn: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        borderRadius: 15,
        justifyContent: 'flex-end',
        marginBottom: 3,
        marginLeft: 20,
        backgroundColor: "#1261A0",
    },

    removebtn: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        borderRadius: 15,
        justifyContent: 'center',
        marginBottom: 3,
        marginLeft: 20,
        backgroundColor: "#1261A0",
    },

    settingmenu: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 1,
    },

    navMenuButton: {
        marginBottom: 1,
    },

    navMenuUser: {
        display: 'flex',
        flexDirection: 'row',
        flex: "1 1 auto",
        alignItems: "center",
        justifyContent: 'flex-start',
        marginBottom: 1,
    },
    navMenuUserName: {
        padding: "5px"
    },

    formContainer: {
        marginTop: "-40px"
    },

    registerFormContainer: {
        marginTop: '-5vh'
    },

    link: {
        fontFamily: "Montserrat Semibold",
        fontSize: "14px",
        color: "#121212"
    },
    subtitleText: {
        marginLeft: '35px',
    },
    stretch: {
        width: 50,
        height: 200,
    },
    radio: {
    },
    checked: {}
});

export default styles;
