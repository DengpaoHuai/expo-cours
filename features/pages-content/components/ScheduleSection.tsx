import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ScheduleSectionProps {
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

const ScheduleSection: React.FC<ScheduleSectionProps> = ({ schedule }) => {
  return (
    <View style={styles.scheduleContainer}>
      <Text style={styles.title}>Programme du Congrès</Text>
      {schedule.map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.date}>{day.date}</Text>
          {day.events.map((event, idx) => (
            <View key={idx} style={styles.eventContainer}>
              <Text style={styles.time}>{event.time}</Text>
              <Text style={styles.eventTitle}>{event.title}</Text>
              {event.speaker && (
                <Text style={styles.speaker}>{event.speaker}</Text>
              )}
              <Text style={styles.location}>{event.location}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dayContainer: {
    marginBottom: 20,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  eventContainer: {
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventTitle: {
    fontSize: 16,
  },
  speaker: {
    fontStyle: "italic",
    marginBottom: 5,
  },
  location: {
    color: "gray",
  },
});

export default ScheduleSection;
