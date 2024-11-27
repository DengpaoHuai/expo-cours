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
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let data = {
          title: "Congrès National des Dentistes de France 2024",
          subtitle:
            "Un rendez-vous incontournable pour les professionnels du secteur dentaire.",
          sections: [
            {
              id: "hero",
              type: "banner",
              headline:
                "Rejoignez-nous au Congrès National des Dentistes de France",
              subheadline:
                "Découvrez les dernières innovations et techniques dentaires.",
              backgroundImage: "https://via.placeholder.com/1920x1080",
              cta: {
                text: "Inscrivez-vous maintenant",
                url: "https://www.dentistesfrance2024.com/inscription",
              },
            },
            {
              id: "about",
              type: "info",
              title: "À propos de l'événement",
              content:
                "Le Congrès National des Dentistes de France est le plus grand événement annuel réunissant des professionnels du secteur dentaire. Cette année, nous mettons un accent particulier sur la dentisterie numérique, les soins préventifs et la santé bucco-dentaire globale.",
              image: "https://via.placeholder.com/800x400",
            },
          ],
        };
        setData({
          hero: {
            headline: data.sections[0].headline as string,
            subheadline: data.sections[0].subheadline as string,
            image: data.sections[0].backgroundImage as string,
          },
          info: {
            title: data.sections[1].title as string,
            content: data.sections[1].content as string,
            image: data.sections[1].image as string,
          },
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
