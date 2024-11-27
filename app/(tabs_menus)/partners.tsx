import SponsorsSection from "../../features/pages-content/components/SponsorsSection";

const sponsors = [
	{
		name: "Champions",
		// logo: require("../../../assets/images/sponsors/champions.png"),
		link: "https://champions-implants.com/fr",
	},
	{
		name: "KLS Martin",
		// logo: require("../../../assets/images/sponsors/klsmartin.png"),
		link: "https://www.klsmartin.com/de/",
	},
];

const Partenrs = () => {

	return (
		<SponsorsSection sponsors={sponsors} />
	);
};

export default Partenrs;

