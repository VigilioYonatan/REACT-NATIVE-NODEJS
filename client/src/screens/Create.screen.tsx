import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {UserControl} from '../components/User.control';
import {
  userCreateSchema,
  UserCreateSchema,
} from '../services/users/schemas/user.schema';
import {userCreateForm} from '../services/users/schemas/user.form';
import {
  userCreateErrorSocket,
  userEmitSocket,
} from '../services/users/socket/user.socket';

export function CreateScreen() {
  const {control, handleSubmit, setError} = useForm<UserCreateSchema>({
    resolver: zodResolver(userCreateSchema),
  });
  const {onCreate} = userEmitSocket();
  userCreateErrorSocket(setError);
  function onSubmit(data: UserCreateSchema) {
    onCreate(data);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="mx-4">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text className="text-xl font-bold uppercase text-center mb-1 ">
            Crear usuario
          </Text>
          <UserControl {...userCreateForm.nombre} control={control} />
          <UserControl {...userCreateForm.email} control={control} />
          <UserControl {...userCreateForm.password} control={control} />
          <UserControl {...userCreateForm.edad} control={control} />
          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-red-600 py-3 rounded-md mt-3"
            onPress={handleSubmit(onSubmit)}>
            <Text className="text-center text-white font-bold uppercase">
              Agregar
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
