import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from "../components/common/Text";
import Logo from '../components/common/Logo';
import Icon from '../components/common/Icon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

class ThursdayScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Thursday',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='calendar' color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
      </View>
    );
  }
}

export default ThursdayScreen;