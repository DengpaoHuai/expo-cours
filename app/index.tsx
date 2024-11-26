import PlanetName from "@/components/PlanetName";
import useConfigStore from "@/stores/config-store";
import { PlanetsResponse } from "@/types/planets.type";
import { router } from "expo-router";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const [planets, setPlanets] = useState<PlanetsResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const { primaryColor } = useConfigStore((state) => state.config.theme);
  const { t } = useTranslation();
  const getData = async (url: string) => {
    const response = await fetch(url);
    const data: PlanetsResponse = await response.json();
    setPlanets(data);
  };

  useEffect(() => {
    getData("https://swapi.dev/api/planets");
  }, []);

  return (
    <>
      <Text>{i18next.t("title")}</Text>
      {planets.results.map((planet) => {
        return <PlanetName key={planet.name} name={planet.name} />;
      })}
      <Button
        disabled={!planets.previous}
        onPress={() => getData(planets.previous!)}
        title="previous"
      />
      <Button
        disabled={!planets.next}
        onPress={() => getData(planets.next!)}
        title="next"
      />
      <Button
        color={primaryColor}
        onPress={() => {
          router.push("/(tabs_menus)/settings");
        }}
        title="Go to Settings"
      ></Button>
      <Button
        onPress={() => {
          router.push("/about");
        }}
        title="Go to Settings"
      ></Button>
      <Button
        onPress={() => {
          router.push("/contact");
        }}
        title="Go to Contact"
      ></Button>
    </>
  );
}

const styles = StyleSheet.create({});
