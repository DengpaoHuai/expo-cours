import useConfigStore from "@/stores/config-store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const tabBarConfig = useConfigStore(
    (state) => state.config.tabBarConfig.listTabs
  );
  console.log(tabBarConfig);

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: tabBarConfig.find((el) => el.name === "index")?.title,
          href: tabBarConfig.find((el) => el.name === "index") ? `/` : null,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="partners"
        options={{
          title: tabBarConfig.find((el) => el.name === "partners")?.title,
          href: tabBarConfig.find((el) => el.name === "partners")
            ? `/partners`
            : null,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="gift" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="program"
        options={{
          title: tabBarConfig.find((el) => el.name === "program")?.title,
          href: tabBarConfig.find((el) => el.name === "program")
            ? `/program`
            : null,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calendar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: tabBarConfig.find((el) => el.name === "settings")?.title,
          href: tabBarConfig.find((el) => el.name === "settings")
            ? `/settings`
            : null,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
