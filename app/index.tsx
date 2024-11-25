import PlanetName from "@/components/PlanetName";
import { Planet, PlanetsResponse } from "@/types/planets.type";
import { useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => {
        return response.json();
      })
      .then((data: PlanetsResponse) => {
        console.log(data);
        setPlanets(data.results);
      });
  }, []);

  return (
    <>
      {planets.map((planet) => {
        return <PlanetName key={planet.name} name={planet.name} />;
      })}
      <Button disabled={true} onPress={() => {}} title="previous" />
      <Button disabled={true} onPress={() => {}} title="next" />
    </>
  );
}

const styles = StyleSheet.create({});
