import {useContext} from 'react';
import {FormControlContext} from './FormControl';
import {TextInput} from 'react-native';

type FormControlControlProps = {
  className?: string;
  customError?: string;
};

export function FormControlControl({
  className ="",
  customError,
}: FormControlControlProps) {
  const {properties, error} = useContext(FormControlContext);
  return (
    <TextInput
      {...properties}
      onChangeText={value => properties.onChange(value)}
      className={
        customError && error ? `${className} ${customError}` : className
      }
    />
  );
}
