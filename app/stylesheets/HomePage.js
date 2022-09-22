import { ScaledSheet } from "react-native-size-matters";

const homePageStyles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    resizeMode: "contain",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    // flex: 1,
    // width: "100%",
    height: "1100@s",
    alignItems: "center",
    marginTop: "-45@s",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0aeeb5",
    height: "30@s",
    width: "220@s",
    borderRadius: 4,
    marginTop: "20@s",
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 2,
  },
  carsImageContainer: {
    // flex: 1,
    width: "100%",
    height: "auto%",
    // marginTop: "10@s",
    // alignItems: "flex-start",
  },
  carsImage: {
    // flex: 1,
    width: "100%",
    height: "215@s",
    marginTop: "-55@s",
    resizeMode: "contain",
  },
  click: {
    // flex: 1,
    color: "#07fbb9",
    fontWeight: "800",
    fontSize: "14@s",
    marginTop: "20@s",
    letterSpacing: 1,
  },
  gladiatorsLogo: {
    // flex: 1,
    width: "75%",
    height: "176@s",
    // resizeMode: "contain",
    marginTop: "25@s",
    // resizeMode: "contain",
  },
  redline: {
    // flex: 1,
    width: "85%",
    height: "15@s",
    marginTop: "40@s",
  },
  text: {
    fontSize: "14@s",
    fontWeight: "400",
    lineHeight: "20@s",
    color: "white",
    paddingLeft: "30@s",
    paddingRight: "30@s",
    textAlign: "center",
    marginTop: "175@s",
  },
  whLogo: {
    width: "90%",
    // overflow: "visible",
    resizeMode: "contain",
    // position: "absolute",
    paddingRight: "25@s",
  },
  whLogoContainer: {
    // flex: 1,
    overflow: "visible",
    width: "100%",
    height: "25%",
    justifyContent: "center",
    // alignItems: "center",
    // paddingBottom: "63@s",
    // marginBottom: "25@s",
  },
});


module.exports = homePageStyles;