import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/Home.screen';
import {UserScreen} from '../screens/User.screen';
import {CreateScreen} from '../screens/Create.screen';
import Icon from 'react-native-vector-icons/Ionicons';
export type RootParamsBottomTab = {
  HomeScreen: undefined;
  CreateScreen: undefined;
  UserScreen: {id: number};
};
const Tab = createBottomTabNavigator<RootParamsBottomTab>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          title: 'home',
          tabBarIcon: () => <Icon name="home-outline" size={30} />,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: 'crear',
          tabBarIcon: () => <Icon name="create-outline" size={30} />,
        }}
        name="CreateScreen"
        component={CreateScreen}
      />
      <Tab.Screen
        options={{
          title: 'user',
          tabBarIcon: () => <Icon name="person-outline" size={30} />,
        }}
        name="UserScreen"
        component={UserScreen}
      />
    </Tab.Navigator>
  );
}
