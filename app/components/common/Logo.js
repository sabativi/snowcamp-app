import React from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import images from "../../../assets/images/";

const { width, height } = Dimensions.get("window");

const customStyles = StyleSheet.create({
  markWrap: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 30,
    backgroundColor: "transparent"
  },
  mark: {
    width: width,
    height: null,
    minHeight: 0,
    maxHeight: height / 3,
    backgroundColor: "transparent",
    flex: 1
  }
});

const LogoScreen = props => (
  <View style={customStyles.markWrap}>
    <Image source={images.logo} style={customStyles.mark} resizeMode="contain" />
  </View>
);

export default LogoScreen;
