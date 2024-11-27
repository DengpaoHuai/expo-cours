import React from "react";
import { View, Text, StyleSheet, SectionList, ScrollView } from "react-native";

const partnersData = [
  {
    title: "Les partenaires 2024 confirmés",
    data: [
      { name: "ABBOTT FRANCE" },
      { name: "LILLY" },
      { name: "ADVANZ PHARMA" },
      { name: "MEDTRONIC" },
      { name: "AIRRA SANTÉ" },
      { name: "MEDTRUM" },
      { name: "AMGEN" },
      { name: "MENARINI" },
      { name: "ALLIANCE BOEHRINGER-INGELHEIM - LILLY" },
      { name: "MERCK" },
      { name: "AMINOGRAM" },
      { name: "MITEM PHARMA" },
      { name: "AMOLYT PHARMA" },
      { name: "NOVO NORDISK" },
      { name: "ASCENDIS PHARMA FRANCE" },
      { name: "OMNIDOC" },
      { name: "ASTRAZENECA" },
      { name: "ORKYN" },
      { name: "BIOCARTIS NV" },
      { name: "PC PAL" },
      { name: "CHIESI" },
      { name: "PFIZER" },
      { name: "DEXCOM" },
      { name: "PREDICTIS" },
      { name: "DIABELOOP" },
      { name: "RECORDATI RARE DISEASES" },
      { name: "EISAI" },
      { name: "RHYTHM PHARMACEUTICALS" },
      { name: "EMBECTA" },
      { name: "SANDOZ" },
      { name: "H.A.C. PHARMA" },
      { name: "SANOFI" },
      { name: "HRA PHARMA RARE DISEASES" },
      { name: "STĒTO" },
      { name: "IBSA" },
      { name: "TIMKL" },
      { name: "INSULET" },
      { name: "UNI-PHARMA S.A." },
      { name: "IPSEN PHARMA" },
      { name: "VITALAIRE" },
      { name: "ISIS DIABETE" },
      { name: "YPSOMED" },
      { name: "LABORATOIRE PAPILLON" },
    ],
  },
  {
    title: "Les ASSOCIATIONS",
    data: [
      { name: "ACROMÉGALES, PAS SEULEMENT..." },
      { name: "FILIÈRE MALADIES RARES ENDOCRINIENNES FIRENDO" },
      {
        name: "APTED ASSOCIATION DE PATIENTS PORTEURS DE TUMEURS ENDOCRINES DIVERSES",
      },
      { name: "FILIÈRE OSCAR" },
      {
        name: "ASSOCIATION FRANÇAISE DES DIABÉTIQUES DU PUY-DE-DÔME ET DE L'ALLIER",
      },
      { name: "GRANDIR" },
      { name: "ASSOCIATION SURRENALES" },
      { name: "HYPOPARATHYROÏDISME FRANCE" },
      { name: "VIVRE SANS THYROÏDE" },
    ],
  },
];

const PartenairesPage = () => {
  return (
    <ScrollView style={styles.container}>
      <SectionList
        sections={partnersData}
        keyExtractor={(item, index) => item.name + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
        scrollEnabled={false}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          MedTech Europe – Code de bonnes pratiques commerciales
        </Text>
        <Text style={styles.paragraph}>
          Un code de bonnes pratiques commerciales pour une meilleure
          transparence des relations entre professionnels de santé et
          industriels.
        </Text>
        <Text style={styles.subtitle}>
          AOS : signataire de la charte MedTech Europe
        </Text>
        <Text style={styles.paragraph}>
          Notre agence AOS, en tant que PCO (Organisateur Professionnel de
          Congrès), adhère au Code d'Éthique Professionnelle MedTech Europe qui
          régit tous les aspects des relations de l'industrie avec les
          professionnels de santé (HCPs) et avec les organisations de soins de
          santé (HCOs), notamment dans le cadre des congrès et événements
          organisés par la profession.
        </Text>
        <Text style={styles.paragraph}>
          Nous sommes à votre disposition pour toutes les démarches nécessaires
          qui s’imposent :
        </Text>
        <Text style={styles.listItem}>
          • Prise en charge de professionnels de santé via l’attribution de
          bourses à la SFE
        </Text>
        <Text style={styles.listItem}>• Accréditation CVS du Congrès</Text>
      </View>
    </ScrollView>
  );
};

const PRIMARY_COLOR = "#0D47A1";
const ACCENT_COLOR = "#1976D2";
const BACKGROUND_COLOR = "#F2F2F2";
const TEXT_COLOR = "#FFFFFF";

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: PRIMARY_COLOR,
    color: TEXT_COLOR,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginVertical: 4,
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  item: {
    fontSize: 16,
    color: "#000",
  },
  textContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    margin: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
    marginLeft: 16,
  },
});

export default PartenairesPage;
