import {FormControlsCustom} from '@vigilio/controller-react-native-hook-form';
import {UserCreateSchema} from './user.schema';
export const userCreateForm: FormControlsCustom<UserCreateSchema> = {
  nombre: {
    name: 'nombre',
    title: 'tu nombre',
    keyboardType: 'default',
    autoCorrect: false,
  },
  email: {
    name: 'email',
    title: 'tu email',
    keyboardType: 'email-address',
    autoCorrect: false,
  },
  password: {
    name: 'password',
    title: 'tu contraseña',
    keyboardType: 'visible-password',
    autoCorrect: false,
  },
  edad: {
    name: 'edad',
    title: 'tu edad',
    keyboardType: 'numeric',
    autoCorrect: false,
    transformer: val => parseInt(val),
  },
};
