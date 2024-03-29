import { ScaledSheet } from "react-native-size-matters";

const storeStyles = ScaledSheet.create({
  container: {
    backgroundColor: "#000",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: 850,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
    marginTop: -60,
  },
  text: {
    flex: 1,
    color: "white",
    fontFamily: "HelveticaRegular",
    fontSize: 30,
    marginTop: "30%",
  },
  whLogo: {
    // flex: 1,
    width: "80%",
    height: 130,
    resizeMode: "contain",
    // position: "absolute",
    marginTop: "18%",
    // marginLeft: "10%",
  },
});

export default storeStyles;
