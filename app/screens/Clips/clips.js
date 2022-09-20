import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableHighlight,
  SafeAreaView,
  Image,
  ScrollView,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
// import Carousel from "../../components/Carousel";
import { ClipsStyles } from "./clipsStyles";
import MenuText from "../../components/MenuText";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import { NavigationContainerRefContext } from "@react-navigation/native";

function Clips({ route }) {
  const [clickState, setClickState] = useState({
    style: (borderColor = "#07fbb9"),
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView style={ClipsStyles.container}>
      <NavBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          style={ClipsStyles.background}
          source={require("../../assets/whLandingBg.jpg")}
        >
          <View
            style={{
              width: "100%",
              height: 250,
              alignItems: "center",
            }}
          >
            <Image
              style={ClipsStyles.gladiatorsLogo}
              source={require("../../assets/gladiatorsLogoSimple.png")}
            />
          </View>
          <View
            style={{
              flex: 0.7,
              width: "100%",
              alignItems: "center",
            }}
          >
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#07fbb9"
              onPress={() =>
                // setClickState({style})
                navigation.navigate("Video", {
                  videoUrl,
                })
              }
              style={{
                width: "65%",
                alignItems: "center",
              }}
            >
              <Image
                style={ClipsStyles.thumb}
                source={require("../../assets/trailerThumb.jpg")}
              />
            </TouchableHighlight>
            <Text style={ClipsStyles.thumbText}>PLAY TRAILER</Text>
            <TouchableHighlight style={{ width: "65%", alignItems: "center" }}>
              <Image
                style={ClipsStyles.thumb}
                source={require("../../assets/playClipThumb.png")}
              />
            </TouchableHighlight>
            <Text style={ClipsStyles.thumbText}>PLAY CLIP 1</Text>
            <TouchableHighlight style={{ width: "65%", alignItems: "center" }}>
              <Image
                style={ClipsStyles.thumb}
                source={require("../../assets/watchFilmThumb.png")}
              />
            </TouchableHighlight>
          </View>
          <Text style={ClipsStyles.thumbText}>WATCH SERIES</Text>

          <Image
            style={ClipsStyles.whLogo}
            source={require("../../assets/wh-logo.png")}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Clips;
