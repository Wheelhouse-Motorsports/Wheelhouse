import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { thankYouStyles } from "../../stylesheets";
import { NavBar } from "../../components";
import { ROUTES } from "../../constants";

const ThankYou = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={thankYouStyles.container}>
      <NavBar />
      <ScrollView>
        <ImageBackground
          style={thankYouStyles.background}
          source={require("../../assets/thankYou/thankYouBg.jpg")}
        >
          <View style={thankYouStyles.whLogoContainer}>
            <Image
              style={thankYouStyles.whLogo}
              source={require("../../assets/upcominShowsElements/whLogo.png")}
            />
          </View>
          <View style={thankYouStyles.boxContainer}>
            <View style={thankYouStyles.box}>
              <Text style={thankYouStyles.thankYouText}>Thank You!</Text>
              {/* <View style={{ width: "100%", height: "45%" }}> */}
              <View>
                <Image
                  style={thankYouStyles.congratsText}
                  source={require("../../assets/thankYou/preOrderText.png")}
                ></Image>
              </View>
              {/* </View> */}
              <View
                style={{ width: "100%", height: "7%", alignItems: "center" }}
              >
                <TouchableOpacity
                  style={thankYouStyles.buttonStyle}
                  onPress={() => navigation.navigate(ROUTES.EPISODES)}
                >
                  <Text style={thankYouStyles.buttonText}>BACK TO HOME</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <View styles={thankYouStyles.whLogoContainerSmall}> */}
          <View style={thankYouStyles.emailSignupContainer}>
            <Text style={thankYouStyles.signupText}>
              {/* SIGN UP FOR EMAILS ABOUT EXLUSIVE OFFERS AND UPCOMING CONTENT */}
            </Text>
          </View>
          <Image
            style={thankYouStyles.whLogoSmall}
            source={require("../../assets/upcominShowsElements/whBottom.png")}
          />
          {/* </View> */}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThankYou;
