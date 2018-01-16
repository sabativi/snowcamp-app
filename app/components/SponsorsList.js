import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Text from "../components/common/Text";
import Error from "../components/common/Error";
import Loader from "../components/common/Loader";

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    flexWrap: 'wrap',
    marginTop: 20
  },
  sponsor: {
    width: "50%",
    alignItems: 'center',
  },
  sponsorImage: {
    width: "80%",
    height: 200,
  }
});

class SponsorsList extends React.Component {
  render() {
    const { t, data: { loading, error, allSponsors } } = this.props;
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <Error error={error.message} />;
    }
    return (
      <ScrollView contentContainerStyle={styles.list}>
        {allSponsors.map(sponsor => (
          <View style={styles.sponsor} key={sponsor.id}>
            <Image
              resizeMode="contain"
              style={styles.sponsorImage}
              source={{ uri: sponsor.imageUrl }}
            />
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default graphql(gql`
  query SponsorsQuery {
    allSponsors {
      id
      imageUrl
      website
    }
  }
`)(SponsorsList);