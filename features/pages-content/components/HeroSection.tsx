import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subheadline,
  image,
}) => {
  console.log("HeroSectionProps", headline, subheadline, image);
  return (
    <View style={styles.heroContainer}>
      <ImageBackground
        source={require("../../../assets/images/head.jpg")}
        style={styles.backgroundImage}
        resizeMode={"cover"}
      >
        {/* 
          <View style={styles.textContainer}>
          <Text style={styles.headline}>{headline}</Text>
          <Text style={styles.subheadline}>{subheadline}</Text>
        </View>
          */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#333",
  },
  backgroundImage: {
    width: "100%",
    height: 300,
    display: "flex",
    justifyContent: "center",
  },
  textContainer: {
    zIndex: 2,
    alignItems: "center",
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subheadline: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default HeroSection;
