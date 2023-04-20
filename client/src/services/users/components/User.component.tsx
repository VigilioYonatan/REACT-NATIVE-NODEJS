import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RootParamsBottomTab} from '../../../navigators/BottomTab.navigator';
import {userIndexSocket} from '../socket/user.socket';

export function UserComponent() {
  const navigation =
    useNavigation<BottomTabNavigationProp<RootParamsBottomTab, 'UserScreen'>>();

  return (
    <View className="flex gap-2 flex-wrap flex-row justify-center">
      {userIndexSocket().map(user => (
        <TouchableOpacity
          onPress={() => navigation.navigate('UserScreen', {id: user.id})}
          activeOpacity={0.7}
          className="bg-slate-800 p-2 rounded-md"
          key={user.id}>
          <View></View>
          <View>
            <Text className="font-bold uppercase text-white">
              {user.nombre}
            </Text>
            <View className="flex flex-row items-center gap-1">
              <Text className="text-gray-300 font-bold">Email:</Text>
              <Text className="text-white">{user.email}</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Text className="text-gray-300 font-bold">Edad:</Text>
              <Text className="text-white">{user.edad} años</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
