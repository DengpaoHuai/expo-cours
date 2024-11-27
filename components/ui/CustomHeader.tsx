import { FontAwesome } from "@expo/vector-icons";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomHeader = (props: BottomTabHeaderProps | NativeStackHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        {!("tabBarButton" in props.options) && (
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            style={styles.buttonPress}
          >
            <FontAwesome size={18} name="arrow-left" color="#000" />
          </TouchableOpacity>
        )}

        <Image
          source={require("../../assets/images/sfe.png")}
          style={{ width: 80, height: 40, paddingTop: 40 }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}></Text>
      <View style={styles.right}></View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  buttonPress: {
    paddingTop: 10,
  },
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  title: {
    flex: 2,
    textAlign: "center",
    color: "#333",
    fontSize: 20,
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
});
