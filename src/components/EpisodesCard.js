import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  Pressable,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import VideoPlayer from "./VideoPlayer";
import MenuText from "./MenuText";
import movies from "./movies.json";
import { Video } from "expo-av";
import { episodesCardStyles } from "../stylesheets";

function EpisodesCard(props) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const borderColorChange = () => {
    setTimeout(() => {
      setIndex(0);
    }, 150);
  };
  index === 0;
  return (
    // <View>
    <View style={episodesCardStyles.container}>
      <Pressable
        underlayColor="none"
        onPressIn={() => {
          borderColorChange(setIndex(1));
          setTimeout(() => {
            navigation.navigate("Video", {
              videoPoster: props.poster,
              videoTitle: props.title,
              videoUrl: props.playVideo,
            });
          }, 200);
          // props.title === "WATCH SERIES", navigation.navigate("RentSeries");
          // console.log(props.title);
        }}
      >
        <View
          style={[
            episodesCardStyles.thumbContainer,
            { borderColor: index === 1 ? "#0aeeb5" : "white" },
          ]}
        >
          <ImageBackground
            style={episodesCardStyles.image}
            source={{ uri: props.thumb }}
          >
            <Image
              style={[
                episodesCardStyles.playBtn,
                { tintColor: index === 1 ? "#0aeeb5" : "white" },
              ]}
              source={{ uri: props.playBtn }}
            />
          </ImageBackground>
        </View>
      </Pressable>
      <View style={episodesCardStyles.textContainer}>
        <Text
          style={[
            episodesCardStyles.text,
            { color: index === 1 ? "#0aeeb5" : "white" },
          ]}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );
}

export default EpisodesCard;
