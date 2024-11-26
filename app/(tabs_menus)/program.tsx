import useUser from "@/stores/user-store";
import { Button, Text, View } from "react-native";

const Program = () => {
  const { setUser } = useUser();

  return (
    <View>
      <Text>Program</Text>
      <Button
        onPress={() => {
          setUser("John Doe");
        }}
        title="ajout donnée"
      ></Button>
    </View>
  );
};

export default Program;
