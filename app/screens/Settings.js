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

class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Settings",
    tabBarIcon: ({ tintColor }) => <Icon name="cogs" color={tintColor} />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

export default SettingsScreen;
