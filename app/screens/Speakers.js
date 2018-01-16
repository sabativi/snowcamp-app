import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../components/common/Text";
import Icon from "../components/common/Icon";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class SpeakersScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Speakers",
    tabBarIcon: ({ tintColor }) => <Icon name="user" color={tintColor} />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Speakers</Text>
      </View>
    );
  }
}

export default SpeakersScreen;
