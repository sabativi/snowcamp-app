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

class FridayScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Friday",
    tabBarIcon: ({ tintColor }) => <Icon name="calendar" color={tintColor} />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Friday</Text>
      </View>
    );
  }
}

export default FridayScreen;
