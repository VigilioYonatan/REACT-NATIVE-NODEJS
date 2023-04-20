import {NavigationContainer} from '@react-navigation/native';
import {Provider} from './context/Provider';
import {BottomTabNavigator} from './navigators/BottomTab.navigator';

export function App() {
  return (
    <Provider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
