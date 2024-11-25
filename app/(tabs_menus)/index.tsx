import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import HeroSection from "@/features/pages-content/components/HeroSection";
import ScheduleSection from "@/features/pages-content/components/ScheduleSection";
import InfoSection from "@/features/pages-content/components/InfoSection";
import httpClient from "@/lib/api-client";

interface HomePageData {
  hero: { headline: string; subheadline: string; image: string };
  info: { title: string; content: string; image: string };
  schedule: Array<{
    date: string;
    events: Array<{
      time: string;
      title: string;
      speaker?: string;
      location: string;
    }>;
  }>;
}

const HomeScreen = () => {
  const [data, setData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await httpClient.get("/pages/home");
        let data = response.data.homepage;
        setData({
          hero: {
            headline: data.sections[0].headline,
            subheadline: data.sections[0].subheadline,
            image: data.sections[0].backgroundImage,
          },
          info: {
            title: data.sections[1].title,
            content: data.sections[1].content,
            image: data.sections[1].image,
          },
          schedule: data.sections[2].items,
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Chargement en cours...</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.error}>
        <Text>Impossible de charger les données.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <HeroSection
        headline={data.hero.headline}
        subheadline={data.hero.subheadline}
        image={data.hero.image}
      />
      <InfoSection
        title={data.info.title}
        content={data.info.content}
        image={data.info.image}
      />
      <ScheduleSection schedule={data.schedule} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
