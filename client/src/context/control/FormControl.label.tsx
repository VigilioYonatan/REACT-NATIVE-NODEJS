import {useContext} from 'react';
import {FormControlContext} from './FormControl';
import {Text} from 'react-native';

export function FormControlLabel({className =""}: {className?: string}) {
  const {title} = useContext(FormControlContext);

  return <Text className={className}>{title}</Text>;
}
