import React from "react";
import { SectionList } from "react-native";
import PropTypes from "prop-types";
import Button from './common/Button'
import Text from "./common/Text";
import Icon from "./common/Icon";
import { ListItem } from "react-native-elements";
import Talk from './Talk';

const groupBy = (tab, key) => (
  tab.reduce((groups, item) => {
    const val = item[key];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {})
)

const Header = ({ title }) => (
  <Button
    containerViewStyle={{
      width: "40%",
      alignSelf: "center",
    }}
    iconComponent={<Icon name="clock-o" />}
    backgroundColor="#d64844"
    title={new Date(title).toLocaleTimeString()}
  />
);

// PureComponent ?
class Schedule extends React.Component {
  render() {
    const { talks } = this.props;
    const talksGroupByStartDate = groupBy(talks, 'startAt');
    const sections = Object.keys(talksGroupByStartDate).map(startDate => ({
      data: talksGroupByStartDate[startDate],
      key: startDate
    }));
    return (
      <SectionList
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Talk {...item} />} 
          renderSectionHeader={({ section }) => <Header title={section.key} />} 
          sections={sections} 
        />
    );
  }
}

Schedule.propTypes = {
  talks: PropTypes.array.isRequired,
};

export default Schedule;
