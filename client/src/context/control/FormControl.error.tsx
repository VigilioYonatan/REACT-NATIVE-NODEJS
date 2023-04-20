import {useContext} from 'react';
import {FormControlContext} from './FormControl';
import {Text} from 'react-native';

export function FormControlError({className = ''}: {className?: string}) {
  const {error} = useContext(FormControlContext);

  return (
    <Text className={error ? className : 'hidden'}>
      {error && error.message}
    </Text>
  );
}
