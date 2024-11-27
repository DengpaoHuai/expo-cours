import CustomHeader from "@/components/ui/CustomHeader";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack, Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        header: CustomHeader,
      }}
    >
      <Stack.Screen name="advanced" />
      <Stack.Screen
        name="faq"
        options={{
          title: "FAQ",
        }}
      />
      <Stack.Screen
        name="notification"
        options={{
          title: "Gestion de vos notifications",
        }}
      />
      <Stack.Screen
        name="notifications-list"
        options={{
          title: "Liste des notifications",
        }}
      />
    </Stack>
  );
}
