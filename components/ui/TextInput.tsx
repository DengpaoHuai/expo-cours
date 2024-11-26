import { Control, Controller, FieldValues } from "react-hook-form";
import { TextInput } from "react-native";

type TextInputHookFormProps = {
  control: Control<any> | undefined;
  name: string;
  placeholder: string;
};
const TextInputHookForm = ({
  control,
  name,
  placeholder,
}: TextInputHookFormProps) => {
  return (
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
  );
};

export default TextInputHookForm;
