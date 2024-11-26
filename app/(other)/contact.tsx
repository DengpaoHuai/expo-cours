import TextInputHookForm from "@/components/ui/TextInput";
import i18n from "@/lang/lang";
import { useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  email: z.string().email().min(5).max(20, i18n.t("form_validation.too_long")),
  content: z.string().min(10),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      content: "",
    },
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
  };

  return (
    <View>
      <Text>Contact</Text>
      <TextInputHookForm
        control={control}
        name="email"
        placeholder="Email"
        error={errors.content?.message}
      />

      <TextInputHookForm
        control={control}
        name="content"
        placeholder="Content"
        error={errors.content?.message}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Contact;
