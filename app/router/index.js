import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import Home from "../screens/Home";
import Thursday from "../screens/Thursday";
import Friday from "../screens/Friday";

const TabRouter = TabNavigator(
  {
    Thursday: {
      screen: Thursday
    },
    Friday: {
      screen: Friday
    }
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "#d64844",
      inactiveTintColor: "grey",
      labelStyle: {
        fontFamily: "Lato",
        fontSize: 12
      },
      style: {
        backgroundColor: "#fbf1f1",
        borderTopColor: "lightgrey",
        borderTopWidth: 1,
      }
    }
  }
);

const StackRouter = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null
      })
    },
    Tab: {
      screen: TabRouter,
      navigationOptions: () => ({
        headerTitle: "Schedule",
        headerTintColor: "#d64844",
        headerStyle: {
          backgroundColor: "#fbf1f1"
        },
        headerTitleStyle: {
          color: "#d64844",
          fontFamily: "Lato-Bold"
        }
      })
    }
  }
);

export default StackRouter;
