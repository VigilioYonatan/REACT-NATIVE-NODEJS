import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/Home.screen';

type RootStackParams = {
  HomeScreen: undefined;
};
const Stack = createStackNavigator<RootStackParams>();

export function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
