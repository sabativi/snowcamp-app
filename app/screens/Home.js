import React from 'react';
import { View, StyleSheet } from 'react-native';
import SponsorsList from '../components/SponsorsList';
import Text from "../components/common/Text";
import Logo from '../components/common/Logo';
import Icon from "../components/common/Icon";
import Button from '../components/common/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoPart: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#39314a",
    paddingBottom: 40
  },
  sponsorPart: {
    flex: 1,
    backgroundColor: "#fbf1f1"
  },
  sponsorsTitleContainer: {
    alignItems: "center",
    marginTop: 10
  },
  sponsorTitle: {
    fontSize: 23,
    fontFamily: "Lato-Bold",
    color: "#89808f"
  }
});

class HomeScreen extends React.Component {
  handleGoToSchedule = () => {
    const { navigation } = this.props;
    navigation.navigate("Schedule");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoPart}>
          <Logo/>
          <Button containerViewStyle={{ borderWidth: 1, borderColor: 'white' }} backgroundColor='transparent' fontSize={25} title='GO TO SCHEDULE' onPress={this.handleGoToSchedule}/>
        </View>
        <View style={styles.sponsorPart}>
          <View style={styles.sponsorsTitleContainer}>
            <Text style={styles.sponsorTitle}>Thanks to our sponsors</Text>
          </View>
          <SponsorsList />
        </View>
      </View>
    );
  }
}

export default HomeScreen;