import { initialState } from "@/content/default-config";
import { Config } from "@/features/config/api/get-config";
import { create } from "zustand";

type ConfigStore = {
  config: Config;
  setConfig: (config: Config) => void;
};

const useConfigStore = create<ConfigStore>((set) => ({
  config: initialState,
  setConfig: (config: Config) => set({ config }),
}));

export default useConfigStore;
