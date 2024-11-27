import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SubPageProps {
	title: string;
	description?: string;
	onPress: () => void;
}

const SubPage: React.FC<SubPageProps> = ({ title, description, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				{description && <Text style={styles.description}>{description}</Text>}
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: "#ffffff",
		borderRadius: 8,
		marginBottom: 15,
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 4,
		shadowOffset: { width: 0, height: 2 },
		elevation: 2,
	},
	textContainer: {
		flexDirection: "column",
	},
	title: {
		fontSize: 18,
		fontWeight: "600",
		color: "#333",
	},
	description: {
		fontSize: 14,
		color: "#666",
		marginTop: 5,
	},
});
