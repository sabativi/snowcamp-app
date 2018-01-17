import React from 'react';
import { View, StyleSheet } from 'react-native';
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Text from "../components/common/Text";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import Logo from '../components/common/Logo';
import Icon from '../components/common/Icon';
import Schedule from '../components/Schedule';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  timeline: {
    position: 'absolute',
    height: "100%",
    borderLeftWidth: 4,
    borderLeftColor: "#d64844",
    marginLeft: 20,
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
    const { data: { loading, error, allTalks } } = this.props;
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <Error error={error.message} />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.timeline} />        
        <Schedule talks={allTalks} />
      </View>
    );
  }
}

export default graphql(gql`
  query thursdayTalks {
    allTalks(
      filter: {
        AND: [{
          startAt_gte: "2018-01-25",
          endAt_lt: "2018-01-26"
        }]
      }, 
      orderBy: startAt_ASC
    ) {
      id
      title
      location
      description
      speakers {
        id
        name
        avatarUrl
      }
      startAt
    }
  }
`)(ThursdayScreen);
