import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StatusBar, Keyboard, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { QueryClientProvider } from "react-query";
import * as Linking from "expo-linking";
// import { useCookies } from "react-cookie";

// import { AuthStack } from "./app/routes";
import { DrawerNav } from "./src/navigation";
import { LoadingScreen } from "./src/screens";
import queryClient from "./src/utils/queryClient";
import { AuthProvider } from "./src/utils/contexts/AuthProvider";
import { UserProvider } from "./src/utils/contexts/UserProvider";
// import { useAuth, AuthProvider } from "./src/utils/contexts/AuthContext";

SplashScreen.preventAutoHideAsync();

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const linking = {
  prefixes: [
    Linking.createURL("/"),
    "https://wheelhousetv.com",
    "wheelhouse://",
    "http://localhost:19006/",
  ],
  config: {
    screens: {
      Home: "Home",
      SignIn: "signin",
      SignUp: "signup",
      ForgotPassword: "forgotpassword",
      ConfirmAccount: "confirmaccount",
      ResetPassword: "resetpassword",
      SignOut: "signout",
      UpcomingShows: "upcomingshows",
      Clips: "clips",
      Store: "store",
      WaitList: "waitlist",
      PlayVideoScreen: "playvideoscreen",
      PlayClipsScreen: "playclipsscreen",
      RentSeries: "rentseries",
      GladiatorsLanding: "gladiatorslanding",
      Episodes: "episodes",
      Cart: "cart",
      ThankYou: "thankyou",
      EmailConfirmation: "emailconfirmation",
    },
  },
};

const App = () => {
  const [fontsLoaded] = useFonts({
    HelveticaRegular: require("./src/assets/fonts/Yantramanav-Black.ttf"),
    Helvetica87Bold: require("./src/assets/fonts/Montserrat-Black.ttf"),
    Helvetica87: require("./src/assets/fonts/Montserrat-VariableFont_wght.ttf"),
    Helvetica87HeavyCondensed: require("./src/assets/fonts/Helvetica-87-Heavy-Condensed.ttf"),
    Helvetica75Bold: require("./src/assets/fonts/Helvetica75-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <UserProvider>
            <StatusBar
              barStyle="light-content"
              translucent={true}
              backgroundColor="black"
            />
            <DismissKeyboard>
              <NavigationContainer linking={linking}>
                <DrawerNav />
              </NavigationContainer>
            </DismissKeyboard>
          </UserProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, 3000);
