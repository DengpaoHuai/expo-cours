import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Switch, Alert } from "react-native";
import { useRouter } from "expo-router";
import { OneSignal } from "react-native-onesignal";

const NotificationsSettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Initialiser OneSignal avec votre App ID
    // Vérifier l'état actuel des permissions
    //   checkNotificationPermission();
  }, []);

  const toggleSwitch = async (value) => {
    /*  if (value) {
      // Demander la permission de recevoir des notifications
      const response =
        await OneSignal.promptForPushNotificationsWithUserResponse();
      if (response) {
        setIsEnabled(true);
        Alert.alert("Notifications activées");
      } else {
        setIsEnabled(false);
        Alert.alert("Les notifications sont désactivées");
      }
    } else {
      // Désactiver les notifications
      await OneSignal.disablePush(true);
      setIsEnabled(false);
      Alert.alert("Notifications désactivées");
    }*/
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Paramètres des notifications</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Recevoir les notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#0D47A1" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const PRIMARY_COLOR = "#0D47A1";
const BACKGROUND_COLOR = "#FFFFFF";
const TEXT_COLOR = "#333333";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    marginBottom: 30,
    textAlign: "center",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  settingText: {
    fontSize: 18,
    color: TEXT_COLOR,
  },
});

export default NotificationsSettingsScreen;
