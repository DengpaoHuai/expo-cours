import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Go to Home"
        onPress={() => router.push("/(settings)/advanced")}
      />
    </View>
  );
};

export default Settings;
