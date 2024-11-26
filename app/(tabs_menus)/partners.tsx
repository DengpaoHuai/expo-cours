import useUser from "@/stores/user-store";
import { Text, View } from "react-native";

const Partners = () => {
  const { user } = useUser();

  return (
    <View>
      <Text>Partners</Text>
      <Text>{user}</Text>
    </View>
  );
};

export default Partners;
