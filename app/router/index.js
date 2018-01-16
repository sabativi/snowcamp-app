import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import Home from "../screens/Home";
import Speakers from "../screens/Speakers";
import Schedule from "../screens/Schedule";

const TabRouter = TabNavigator({
  Schedule: {
    screen: Schedule
  },
  Speakers: {
    screen: Speakers
  }
});

const StackRouter = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
    })
  },
  Tab: {
    screen: TabRouter,
  }
});

export default StackRouter;
