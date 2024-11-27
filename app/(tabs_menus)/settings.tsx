import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Paramètres</Text>

      <TouchableOpacity
        style={styles.item}
        onPress={() => router.push("/(settings)/notification")}
      >
        <FontAwesome
          name="bell"
          size={24}
          color={ACCENT_COLOR}
          style={styles.icon}
        />
        <Text style={styles.itemText}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => router.push("/(settings)/notifications-list")}
      >
        <FontAwesome
          name="list"
          size={24}
          color={ACCENT_COLOR}
          style={styles.icon}
        />
        <Text style={styles.itemText}>Liste des Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => router.push("/(settings)/faq")}
      >
        <FontAwesome
          name="question-circle"
          size={24}
          color={ACCENT_COLOR}
          style={styles.icon}
        />
        <Text style={styles.itemText}>FAQ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          Linking.openURL("https://www.sfendocrino.org/mentions-legales")
        }
      >
        <FontAwesome
          name="file-text"
          size={24}
          color={ACCENT_COLOR}
          style={styles.icon}
        />
        <Text style={styles.itemText}>Mentions Légales</Text>
      </TouchableOpacity>
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
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    marginBottom: 24,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  icon: {
    marginRight: 16,
  },
  itemText: {
    fontSize: 18,
    color: PRIMARY_COLOR,
    fontWeight: "600",
    flex: 1,
  },
});

export default SettingsScreen;
