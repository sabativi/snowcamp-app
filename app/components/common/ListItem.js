import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from 'react-native-elements';

const customStyles = StyleSheet.create({
  titleStyle: {
    fontSize: 15,
    fontFamily: "Lato-Bold"
  },
  containerStyle: {
    borderBottomWidth: 0
  }
});

const ListItemWrap = ({ titleStyle, containerStyle, ...otherProps }) => (
  <ListItem
    titleStyle={[customStyles.titleStyle, titleStyle]}
    containerStyle={[customStyles.containerStyle, containerStyle]}
    {...otherProps}
  />
);

export default ListItemWrap;
