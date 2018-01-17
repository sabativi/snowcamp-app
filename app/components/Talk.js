import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Divider } from 'react-native-elements';
import ListItem from './common/ListItem';
import PropTypes from "prop-types";
import ReadMore from "react-native-read-more-text";
import Text from "./common/Text";
import Icon from './common/Icon';

const styles = StyleSheet.create({
  card: {
    marginVertical: 5
  },
  cardText: {
    fontSize: 14,
    fontFamily: "Lato"
  },
  truncated: {
    marginTop: 5,
    fontSize: 14,
    color: "grey"
  },
});

class Description extends React.Component {
  render() {
    let { text } = this.props;

    return (
      <View style={styles.card}>
        <ReadMore
          numberOfLines={3}
          renderTruncatedFooter={this._renderTruncatedFooter}
          renderRevealedFooter={this._renderRevealedFooter}
          onReady={this._handleTextReady}
        >
          <Text style={styles.cardText}>{text}</Text>
        </ReadMore>
      </View>
    );
  }

  _renderTruncatedFooter = handlePress => {
    return (
      <Text
        style={styles.truncated}
        onPress={handlePress}
      >
        Read more
      </Text>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <Text
        style={styles.truncated}
        onPress={handlePress}
      >
        Show less
      </Text>
    );
  };
}

const Talk = ({ title, speakers, location, description }) => (
  <Card title={title}>
    <Description text={description} />
    {speakers.map(s => (
      <ListItem
        roundAvatar
        hideChevron
        avatar={{
          uri:
            s.avatarUrl ||
            "https://api.adorable.io/avatars/108/abott@adorable.png"
        }}
        key={s.id}
        title={s.name}
      />
    ))}
    <ListItem
      hideChevron
      title={location}
      titleStyle={{
        marginLeft: 10
      }}
      leftIcon={<Icon containerStyle={{ marginLeft: 10 }} name="map-marker" />}
    />
  </Card>
);

Talk.propTypes = {
  title: PropTypes.string.isRequired,
  speakers: PropTypes.array,
};

export default Talk;
