import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import Home from "../screens/Home";
import Thursday from "../screens/Thursday";
import Friday from "../screens/Friday";

const TabRouter = TabNavigator({
  Thursday: {
    screen: Thursday
  },
  Friday: {
    screen: Friday
  }
});

const StackRouter = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null
    })
  },
  Tab: {
    screen: TabRouter,
    navigationOptions: () => ({
      headerTitle: 'Schedule'
    })
  }
});

export default StackRouter;
