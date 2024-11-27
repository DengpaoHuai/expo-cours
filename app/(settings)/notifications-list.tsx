import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const notifications = [
  {
    id: "1",
    title: "Symposium SFE 01",
    message: "Le Symposium SFE 01 sur l'Hyperaldostéronisme commence à 14h00.",
    time: "Aujourd'hui, 13:45",
  },
  {
    id: "2",
    title: "Atelier SFE 05",
    message:
      "N'oubliez pas l'Atelier SFE 05 sur la Préservation de la fertilité à 13h50.",
    time: "Aujourd'hui, 13:00",
  },
  {
    id: "3",
    title: "Conférence Grand Public",
    message: "La Conférence Grand Public commence bientôt.",
    time: "Hier, 17:00",
  },
  // Ajoutez d'autres notifications basées sur nos échanges si nécessaire
];

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationTime}>{item.time}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Aucune notification pour le moment.
            </Text>
          </View>
        }
      />
    </View>
  );
};

const PRIMARY_COLOR = "#0D47A1";
const TEXT_COLOR = "#333333";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    textAlign: "center",
    marginVertical: 20,
  },
  notificationItem: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: PRIMARY_COLOR,
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 16,
    color: TEXT_COLOR,
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 14,
    color: "#777777",
    textAlign: "right",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: "#999999",
  },
});

export default NotificationsScreen;
