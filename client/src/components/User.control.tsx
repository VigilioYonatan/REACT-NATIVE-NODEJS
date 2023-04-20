import {
  FormController,
  FormControlComponent,
  FormControlPropsTotal,
} from '@vigilio/controller-react-native-hook-form';
import {Text, TextInput, View} from 'react-native';

export function UserControl<T extends object>(
  properties: FormControlComponent<T>,
) {
  return (
    <FormController {...properties} custom>
      {
        (({props, renderMethods}: FormControlPropsTotal<T>) => {
          const {value, onChange, id, ...rest} = props;
          return (
            <View className="mb-2">
              <Text className="uppercase text-xs">{properties.title}</Text>
              <TextInput
                className="py-1 px-2 border rounded-md"
                {...rest}
                onChangeText={value =>
                  onChange(
                    properties.transformer
                      ? properties.transformer(value)
                      : value,
                  )
                }
              />
              {renderMethods.error ? (
                <Text className="text-red-600 text-xs mt-1">
                  {renderMethods.error.message}
                </Text>
              ) : null}
            </View>
          );
        }) as any
      }
    </FormController>
  );
}
