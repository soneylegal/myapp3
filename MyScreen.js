import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function MyScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>Minha tela!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
