import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Assurez-vous d'installer @expo/vector-icons ou utilisez une autre bibliothèque d'icônes

const faqData = [
  {
    question: "Comment obtenir une lettre d’invitation ?",
    answer:
      "La demande se fait lors de l’inscription en ligne. À la première étape de l’inscription, cochez « oui » à la question « Aurez-vous besoin d’une lettre d’invitation ? ». Une fois votre inscription complétée, vous aurez la possibilité de télécharger la lettre d’invitation depuis votre espace personnel ou depuis l’email de notification envoyé après inscription.",
  },
  {
    question: "Comment s’inscrire ?",
    answer:
      "Les inscriptions au Congrès se font exclusivement en ligne sur ce site.\n\n**Inscription individuelle** :\nCréez votre espace personnel à cette adresse pour procéder à votre inscription en ligne. Conservez vos identifiants car vous pouvez à tout moment vous reconnecter sur votre espace personnel pour consulter ou modifier vos options.\n\nSi vous inscrivez un tiers, vous devez absolument saisir les coordonnées complètes du participant. Ceci est exigé par la Société Française d’Endocrinologie. Toute inscription ne comportant pas les coordonnées complètes des participants ne sera pas validée. Vous avez la possibilité de saisir deux adresses e-mail : la vôtre ainsi que celle du tiers que vous inscrivez.\n\n**Inscription d’un groupe de 10 personnes et plus** : Merci de contacter le secrétariat logistique du Congrès pour connaître les conditions particulières d’inscription.",
  },
  {
    question: "Comment inscrire plusieurs participants ?",
    answer:
      "Si vous inscrivez moins de 10 participants, l’inscription sera individuelle : vous devez créer un espace personnel au nom de chaque participant que vous souhaitez inscrire.\n\nPour l’inscription d’un groupe de 10 personnes et plus, merci de contacter le secrétariat logistique du Congrès à **sfeparticipant@aoscongres.com** pour connaître les conditions particulières d’inscription.",
  },
  {
    question: "Qu’est-ce qui est inclus dans les frais d’inscription ?",
    answer:
      "Les droits d’inscription comprennent :\n\n- L’admission aux sessions scientifiques (hors staff/exposant sans accès session)\n- Le programme du Congrès\n- L’accès à l’Espace Exposition et Posters\n\nLes frais d’inscription n’incluent pas la restauration.",
  },
  {
    question: "Comment obtenir une facture ?",
    answer:
      "Votre facture est téléchargeable depuis votre espace personnel une fois l’inscription complétée ou depuis l’email de notification envoyé après votre inscription.",
  },
  {
    question: "Comment obtenir mon attestation de participation ?",
    answer:
      "Votre attestation de participation vous sera envoyée après le congrès par e-mail.",
  },
  {
    question: "Le congrès est-il proposé en virtuel ?",
    answer:
      "Le congrès sera proposé au format hybride. Les sessions seront retransmises en direct sur la plateforme virtuelle du congrès et/ou seront disponibles en replay. Vous pouvez sélectionner votre mode de participation lors de votre inscription en ligne. Veuillez noter que les frais d'inscription restent identiques quel que soit le mode de participation.",
  },
  {
    question: "Comment modifier mon inscription ?",
    answer:
      "Si vous souhaitez effectuer des modifications sur votre inscription, nous vous invitons à vous reconnecter à l’aide des identifiants que vous aurez générés lors de votre enregistrement, afin de procéder aux modifications directement en ligne.\n\n**Attention** : La participation aux cocktails déjeunatoires ou à la soirée du congrès ne sera plus annulable ni remboursable à compter du 1er août 2024. De plus, sans règlement avant le 9 septembre 2024, votre participation aux cocktails déjeunatoires et à la soirée du congrès sera annulée.",
  },
  {
    question: "Comment annuler mon inscription ?",
    answer:
      "Toute demande d’annulation devra être faite par email à **sfeparticipant@aoscongres.com** qui accusera réception de la demande d’annulation.\n\n- Jusqu’au 31 juillet 2024, le remboursement des frais d’inscription sera effectué (un montant forfaitaire de 50 Euros sera déduit pour frais de gestion).\n- À partir du 1er août 2024, aucun remboursement ne sera effectué.\n\nTout remboursement sera effectué après le Congrès. Aucune inscription ne sera prise en compte sans règlement ou bon de commande officiel.",
  },
  {
    question: "Où me loger ?",
    answer:
      "Nous vous informons que la réservation hôtelière ne sera pas proposée pour les inscriptions individuelles. Nous vous invitons donc à réserver votre hébergement par vos propres moyens.\n\nVous trouverez ci-dessous une liste d’hôtels à proximité du Polydome :\n\n- **Hôtel Mercure Centre Jaude**\n  1 Av. Julien, 63000 Clermont-Ferrand\n  *2,5 km - 35 min à pied / 15 min en tramway*\n\n- **Le Magnetic Aiden by Best Western**\n  41 Av. de la République, 63100 Clermont-Ferrand\n  *550 m - 8 min à pied*\n\n- **Oceania**\n  82 Bd François Mitterrand, 63000 Clermont-Ferrand\n  *2,7 km - 40 min à pied / 18 min en tramway*\n\n*(Liste non exhaustive)*",
  },
];

const FAQScreen: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>FAQ</Text>
      {faqData.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity
            onPress={() => toggleExpand(index)}
            style={styles.questionContainer}
          >
            <Text style={styles.questionText}>{item.question}</Text>
            <AntDesign
              name={activeIndex === index ? "minus" : "plus"}
              size={24}
              color="#0D47A1"
            />
          </TouchableOpacity>
          {activeIndex === index && (
            <View style={styles.answerContainer}>
              <Text style={styles.answerText}>{item.answer}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const PRIMARY_COLOR = "#0D47A1";
const ACCENT_COLOR = "#1976D2";
const BACKGROUND_COLOR = "#FFFFFF";
const TEXT_COLOR = "#333333";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    textAlign: "center",
    marginVertical: 20,
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "600",
    color: PRIMARY_COLOR,
    flex: 1,
    marginRight: 10,
  },
  answerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  answerText: {
    fontSize: 16,
    color: TEXT_COLOR,
    lineHeight: 24,
  },
});

export default FAQScreen;
