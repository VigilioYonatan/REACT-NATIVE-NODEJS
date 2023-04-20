import {StackScreenProps} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {RootParamsBottomTab} from '../navigators/BottomTab.navigator';
import {userApi} from '../services/users/api/user.api';
import {useEffect} from 'react';

export function UserScreen({
  navigation,
  route,
}: StackScreenProps<RootParamsBottomTab, 'UserScreen'>) {
  const {id} = route.params;

  const {data, refetching} = userApi().show(id);
  useEffect(() => {
    refetching();
  }, [id]);
  return (
    <View>
      <Text>{JSON.stringify(data, null, 3)}</Text>
    </View>
  );
}
