import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const InfoSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Édito</Text>
        <Text style={styles.content}>
          C'est avec un immense plaisir que nous vous accueillerons au 40ème
          Congrès de la Société Française d’Endocrinologie qui se tiendra à
          Clermont-Ferrand pour l’édition 2024. Cette manifestation reste un
          grand moment d’échanges d'idées et de partage de connaissances pour
          tracer de nouvelles voies, remettre en question les paradigmes
          existants et façonner l'avenir de notre discipline. Nous avons eu à
          cœur avec l’ensemble du comité scientifique et le comité local
          d’organisation de vous proposer un programme attractif et dynamique
          couvrant les différents aspects cliniques et fondamentaux de
          l'endocrinologie, du diabète et du métabolisme. Le programme du
          congrès 2024 a été conçu pour stimuler des discussions animées entre
          les différents participants rassemblés par leur intérêt commun pour
          notre discipline : chercheurs et cliniciens (pour adultes et enfants),
          paramédicaux, etc.
        </Text>
        <Text style={styles.content}>
          Les conférences plénières traiteront notamment des avancées
          scientifiques et cliniques les plus récentes dans le processus de
          détermination ovarienne, du traitement des cancers surrénaliens ainsi
          que des enjeux éthiques associés au déploiement de l’intelligence
          artificielle en santé. Les symposiums couvriront un spectre large de
          notre spécialité, en abordant par exemple l’impact de la connaissance
          des maladies rares sur la prise en charge des pathologies fréquentes,
          les conséquences des dépistages génétiques, des aspects innovants du
          métabolisme lipidique, de l’hyperaldostéronisme primaire, des cancers
          de la thyroïde, du rythme circadien et des interactions système
          immunitaire/cellules endocrines. Une dizaine d’ateliers permettront
          aux cliniciens et scientifiques d’échanger avec des experts sur des
          questions pratiques incluant des aspects médico-légaux et l’irruption
          de l’intelligence artificielle dans la pratique clinique. Les deux
          séances de controverses, la conférence de consensus (consacrée à
          l’hyperparathyroïdie primaire), permettront de discuter de la prise en
          charge des patients. Par ailleurs, "L’année en" sera consacrée à
          l’hypophyse. Le congrès de la SFE Clermont-Ferrand 2024 sera aussi
          caractérisé par la poursuite des parcours « Endoscience » et «
          Paramédical » qui ont été initiés au congrès de Marseille l’année
          dernière et ont recueilli un franc succès. Le parcours Endoscience
          comportera 3 symposiums scientifiques originaux traitant de la place
          des hormones sexuelles dans le comportement et dans les neurosciences,
          ainsi que de thérapies innovantes utilisant les vésicules
          extracellulaires. Deux ateliers visant à mettre en perspective
          clinique les progrès de la recherche seront dédiés à de nouvelles
          technologies ainsi qu’à la diversité des processus de mort cellulaire.
          Le parcours paramédical se déclinera sous une forme d’échanges et
          d’ateliers.
        </Text>
        <Text style={styles.content}>
          Avec un tel programme, nul temps pour le tourisme. Mais rassurez-vous,
          votre bref trajet à pied ou en tramway sur pneumatiques depuis votre
          hôtel vous permettra de découvrir les flèches de la cathédrale
          gothique ou le tympan roman de Notre Dame du Port, tandis que
          l’esplanade du Polydome vous donnera vue sur les volcans d’Auvergne,
          et même sur le mythique stade de rugby.
        </Text>
        <Text style={styles.content}>
          Le conseil scientifique ainsi que le comité local d’organisation
          espèrent vivement vous retrouver à Clermont-Ferrand pour des échanges
          riches et stimulants. Nous espérons que ce congrès vous apportera des
          connaissances précieuses, des souvenirs et des connexions durables.
          Nous sommes impatients de vous rencontrer et de partager avec vous cet
          événement à la fois scientifique et amical, qui se tiendra du mercredi
          16 au vendredi 18 Octobre 2024.
        </Text>
        <Text style={styles.signature}>
          Nadia Cherradi et Lionel Groussin{"\n"}
          <Text style={styles.signatureTitle}>
            Co-Présidents du Conseil Scientifique
          </Text>
          {"\n\n"}
          Antoine Martinez et Igor Tauveron{"\n"}
          <Text style={styles.signatureTitle}>
            Co-Présidents du Comité Local d’Organisation
          </Text>
        </Text>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");
const PRIMARY_COLOR = "#0D47A1";
const ACCENT_COLOR = "#1976D2";
const BACKGROUND_COLOR = "#FFFFFF";
const TEXT_COLOR = "#333333";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  bannerImage: {
    width: width,
    height: 200,
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    color: TEXT_COLOR,
    lineHeight: 24,
    marginBottom: 16,
    textAlign: "justify",
  },
  signature: {
    fontSize: 16,
    color: TEXT_COLOR,
    lineHeight: 24,
    marginTop: 24,
  },
  signatureTitle: {
    fontStyle: "italic",
    color: ACCENT_COLOR,
  },
});

export default InfoSection;
