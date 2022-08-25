import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createAppContainer } from "react-navigation";
import { Entypo } from "@expo/vector-icons";

import HomePage from "../screens/homePage";
import UpcomingShows from "../screens/upcomingShows";
import GladiatorsLandingPage from "../screens/gladiatorsLandingPage";
import Store from "../screens/store";
import WaitList from "../screens/waitList";
import NavBar from "../components/NavBar";
import PlayVideoScreen from "../screens/playVideoScreen";
import HomeStack from "./homeStack";

const WIDTH = Dimensions.get("window").width;

const headerStyles = {
  navigationOptions: () => {
    return {
      headerTitle: () => <NavBar />,
    };
  },
};
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 0,
        drawerStyle: {
          width: WIDTH * 0.6,
        },
      }}
      // useLegacyImplementation={true}
    >
      {/* {auth && <HomeStack />} */}
      <Drawer.Screen name="Home" component={HomeStack} options={headerStyles} />

      <Drawer.Screen
        name="Upcoming Shows"
        component={UpcomingShows}
        options={headerStyles}
      />

      <Drawer.Screen
        name="Gladiators of Steel"
        component={GladiatorsLandingPage}
        options={headerStyles}
      />

      <Drawer.Screen name="Store" component={Store} options={headerStyles} />

      <Drawer.Screen
        name="WaitList"
        component={WaitList}
        options={headerStyles}
      />

      <Drawer.Screen
        name="Video"
        component={PlayVideoScreen}
        options={headerStyles}
      />
    </Drawer.Navigator>
  );
};

// (
//   {
//     Home: {
//       screen: HomeStack,
//       navigationOptions: ({ navigation }) => {
//         return {
//           headerTitle: () => <NavBar navigation={navigation} />,
//         };
//       },
//     },
//     UpcomingShows: {
//        screen: UpcomingShows,
//        navigationOptions: {
//          headerTitle: () => <NavBar />,
//        },
//      },
//     Waitlist: {
//       screen: WaitList,
//       // navigationOptions: {
//       //   headerTitle: () => <NavBar />,
//       // },
//     },
//     Gladiators: {
//       screen: GladiatorsLandingPage,
//       // navigationOptions: {
//       //   headerTitle: () => <NavBar />,
//       // },
//     },
//     Store: {
//       screen: Store,
//       // navigationOptions: {
//       //   headerTitle: () => <NavBar />,
//       // },
//     },
//     VideoScreen: {
//       screen: PlayVideoScreen,
//       // navigationOptions: {
//       //   headerTitle: () => <NavBar />,
//       // },
//     },
//   },
//   DrawerConfig
// );

export default DrawerNav;
