import { Control, Controller, FieldValues } from "react-hook-form";
import { Text, TextInput } from "react-native";

type TextInputHookFormProps = {
  control: Control<any> | undefined;
  name: string;
  placeholder: string;
  error?: string;
};
const TextInputHookForm = ({
  control,
  name,
  placeholder,
  error,
}: TextInputHookFormProps) => {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      {error && <Text>{error}</Text>}
    </>
  );
};

export default TextInputHookForm;
