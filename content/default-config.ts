import { Config } from "@/features/config/api/get-config";

export const initialState: Config = {
  appName: "My App",
  theme: {
    primaryColor: "#6200ee",
    secondaryColor: "#03dac6",
    tertiaryColor: "#ffffff",
    quaternaryColor: "#000000",
    primaryTextColor: "#000000",
    secondaryTextColor: "#ffffff",
    tertiaryTextColor: "#000000",
    quaternaryTextColor: "#ffffff",
  },
  tabBarConfig: {
    listTabs: [
      {
        id: 1,
        name: "index",
        icon: "home",
        title: "Home",
      },
      {
        id: 2,
        name: "partners",
        icon: "calendar",
        title: "Partners",
      },
      {
        id: 3,
        name: "program",
        icon: "gift",
        title: "Program",
      },
      {
        id: 4,
        name: "settings",
        icon: "user",
        title: "Settings",
      },
    ],
  },
};
