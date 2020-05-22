import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import Alerts from '../pages/Alerts';
import Calendar from '../pages/Calendar';
// import Client from '../pages/Client';
import Clients from '../pages/Clients';
import Payments from '../pages/Payments';
import Register from '../pages/Register';

const Tab = createBottomTabNavigator();
// const Stack = createBottomTabNavigator();

// function ClientScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Clients" component={Clients} />
//       <Stack.Screen name="Client" component={Client} />
//     </Stack.Navigator>
//   );
// }

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => (
        <Icon
          name={
            route.name === 'Calendar'
              ? 'calendar'
              : route.name === 'Clients'
              ? 'user'
              : route.name === 'Register'
              ? 'plus-circle'
              : route.name === 'Payments'
              ? 'dollar-sign'
              : route.name === 'Alerts'
              ? 'bell'
              : 'help-circle'
          }
          size={26}
          color={focused ? '#1e4040' : '#dae7f2'}
        />
      ),
    })}
    tabBarOptions={{
      showLabel: false,
      keyboardHidesTabBar: true,
      activeBackgroundColor: '#0B151F',
      inactiveBackgroundColor: '#0B151F',
    }}
  >
    <Tab.Screen name="Calendar" component={Calendar} />
    <Tab.Screen name="Clients" component={Clients} />
    <Tab.Screen name="Register" component={Register} />
    <Tab.Screen name="Payments" component={Payments} />
    <Tab.Screen name="Alerts" component={Alerts} />
  </Tab.Navigator>
);

export default TabRoutes;
