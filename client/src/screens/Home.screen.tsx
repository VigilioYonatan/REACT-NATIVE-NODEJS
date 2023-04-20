import {View, Text, ScrollView} from 'react-native';
import {UserComponent} from '../services/users/components/User.component';
import Icon from 'react-native-vector-icons/Ionicons';

export function HomeScreen() {
  return (
    <ScrollView>
      <View>
        <Text className="text-center font-bold text-2xl mb-3 uppercase">
          Usuarios
        </Text>
        <UserComponent />
      </View>
    </ScrollView>
  );
}
