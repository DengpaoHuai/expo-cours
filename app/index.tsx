import PlanetName from "@/components/PlanetName";
import { PlanetsResponse } from "@/types/planets.type";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [planets, setPlanets] = useState<PlanetsResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

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
    </>
  );
}

const styles = StyleSheet.create({});
