import { Text, StyleSheet } from "react-native";

type PlanetNameProps = {
  name: string;
};

const PlanetName = ({ name }: PlanetNameProps) => {
  return <Text style={styles.planetName}>{name}</Text>;
};

export default PlanetName;
const styles = StyleSheet.create({
  planetName: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
