import React from "react";
import {
	ScrollView,
	View,
	Image,
	Text,
	TouchableOpacity,
	Linking,
	StyleSheet,
} from "react-native";

interface SponsorsSectionProps {
	sponsors: Array<{
		name: string;
		// logo: any;
		link: string;
	}>;
	logoSize?: number;
	linkColor?: string;
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({
	sponsors,
	logoSize = 80,
	linkColor = "#007bff",
}) => {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			{sponsors.map((sponsor, index) => (
				<View key={index} style={styles.partnerContainer}>
					<Image
						// source={sponsor.logo}
						source={require("../../../assets/images/sponsors/champions.png")}
						style={[styles.logo, { width: logoSize, height: logoSize }]}
					/>
					<TouchableOpacity onPress={() => Linking.openURL(sponsor.link)}>
						<Text style={[styles.linkText, { color: linkColor }]}>
							{sponsor.name}
						</Text>
					</TouchableOpacity>
				</View>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	partnerContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
	},
	logo: {
		marginRight: 10,
		borderRadius: 5,
	},
	linkText: {
		fontSize: 16,
	},
});

export default SponsorsSection;
