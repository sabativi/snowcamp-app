import React from 'react';
import { Text, StyleSheet } from 'react-native';

const customStyles = StyleSheet.create({
  text: {
    fontFamily: "Lato",
    fontSize: 17
  },
});

const TextWrap = ({ style, ...props }) => (
  <Text style={[customStyles.text, style]} {...props} />
);

export default TextWrap;
