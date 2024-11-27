import React, { useState } from "react";
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
  ScrollView,
} from "react-native";

interface EventItem {
  startTime: string;
  endTime: string;
  title: string;
  location: string;
  details: string;
  speakers: string;
}

interface SectionData {
  date: string;
  data: EventItem[];
}

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const DATA = [
  {
    date: "16 octobre 2024",
    data: [
      {
        startTime: "11:30",
        endTime: "19:30",
        title: "Accueil",
        location: "",
        details: "",
        speakers: "",
      },
      {
        startTime: "12:15",
        endTime: "13:45",
        title: "Les Essentiels de l'Endocrinologie",
        location: "Amphithéâtre Blaise Pascal",
        details: "",
        speakers: "",
      },
      {
        startTime: "14:00",
        endTime: "15:30",
        title: "Symposium SFE 01",
        location: "Amphithéâtre Blaise Pascal",
        details: "Hyperaldostéronisme",
        speakers: "",
      },
      {
        startTime: "14:00",
        endTime: "15:30",
        title: "Symposium SFE 02",
        location: "Espace Germaine Tillion",
        details:
          "FIRENDO - Médicaments de nouvelle génération en Endocrinologie et Nutrition",
        speakers: "",
      },
      {
        startTime: "14:00",
        endTime: "15:30",
        title: "Symposium SFE 03",
        location: "Salle Pierre Teilhard de Chardin",
        details: "Parcours EndoScience - Sexe, hormones & comportement",
        speakers: "",
      },
      {
        startTime: "14:00",
        endTime: "15:30",
        title: "Symposium SFE 04",
        location: "Salle Alexandre Vialatte",
        details:
          "Auto-immunité en endocrinologie : avant et au-delà de l'insuffisance terminale d'organe",
        speakers: "",
      },
      {
        startTime: "14:00",
        endTime: "15:30",
        title: "Symposium SFE 05",
        location: "Salle Gilbert Lafayette",
        details:
          "Les triglycérides : nouveaux enjeux diagnostiques et thérapeutiques (NSFA)",
        speakers: "",
      },
    ],
  },
  {
    date: "17 octobre 2024",
    data: [
      {
        startTime: "07:45",
        endTime: "19:30",
        title: "Accueil",
        location: "",
        details: "",
        speakers: "",
      },
      {
        startTime: "08:30",
        endTime: "10:00",
        title: "Symposium SFE 06",
        location: "Amphithéâtre Blaise Pascal",
        details:
          "Actualités dans les recommandations en Endocrinologie et Diabétologie",
        speakers: "",
      },
      {
        startTime: "13:50",
        endTime: "14:35",
        title: "Atelier SFE 05",
        location: "Salle Henri Pourrat",
        details: "Préservation de la fertilité",
        speakers: "Charlotte SONIGO, Clamart; Nathalie RIVES, Rouen",
      },
    ],
  },
];

const ProgramScreen: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExpand = (sectionIndex: number, itemIndex: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const key = `${sectionIndex}-${itemIndex}`;
    setExpandedItems((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const renderItem = ({
    item,
    index,
    section,
  }: {
    item: EventItem;
    index: number;
    section: SectionData;
  }) => {
    const sectionIndex = DATA.indexOf(section);
    const itemIndex = index;
    const key = `${sectionIndex}-${itemIndex}`;
    const isExpanded = !!expandedItems[key];

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => toggleExpand(sectionIndex, itemIndex)}>
          <View style={styles.itemHeader}>
            <Text style={styles.time}>
              {item.startTime} - {item.endTime}
            </Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.itemContent}>
            {item.details ? (
              <Text style={styles.details}>{item.details}</Text>
            ) : null}
            {item.location ? (
              <Text style={styles.location}>Lieu : {item.location}</Text>
            ) : null}
            {item.speakers ? (
              <Text style={styles.speakers}>
                Intervenants : {item.speakers}
              </Text>
            ) : null}
          </View>
        )}
      </View>
    );
  };

  const renderSectionHeader = ({
    section: { date },
  }: {
    section: SectionData;
  }) => <Text style={styles.sectionHeader}>{date}</Text>;

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.title + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const PRIMARY_COLOR = "#0D47A1";
const ACCENT_COLOR = "#1976D2";
const BACKGROUND_COLOR = "#F2F2F2";
const TEXT_COLOR = "#FFFFFF";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: TEXT_COLOR,
    marginBottom: 8,
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemHeader: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontSize: 14,
    color: ACCENT_COLOR,
    marginRight: 16,
    width: 80,
    fontWeight: "600",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: PRIMARY_COLOR,
    flex: 1,
    flexWrap: "wrap",
  },
  itemContent: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#FAFAFA",
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
  },
  details: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: "#777",
    marginBottom: 4,
  },
  speakers: {
    fontSize: 16,
    color: "#777",
  },
});
export default ProgramScreen;
