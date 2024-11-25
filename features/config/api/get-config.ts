import httpClient from "@/lib/api-client";
import { AxiosResponse } from "axios";

export type Config = {
  appName: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    quaternaryColor: string;
    primaryTextColor: string;
    secondaryTextColor: string;
    tertiaryTextColor: string;
    quaternaryTextColor: string;
  };
  tabBarConfig: {
    listTabs: {
      id: number;
      name: string;
      icon: string;
      screen: string;
    }[];
  };
};

export const getConfig = async () => {
  const data: AxiosResponse<Config, Config> = await httpClient.get("/config");
  return data;
};
