import PlanetName from "@/components/PlanetName";
import { Planet, PlanetsResponse } from "@/types/planets.type";
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
    </>
  );
}

const styles = StyleSheet.create({});
