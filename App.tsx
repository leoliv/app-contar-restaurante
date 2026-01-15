import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Pessoas no restaurante:</Text>
      <View style={styles.boxCount}>
        <Text style={styles.boxTitle}>7</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Adicionar</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 20,
  },
  boxCount: {
    marginTop: 20,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
  },
  boxTitle: {
    color: "#fff",
    fontSize: 30,
  },
  containerButton: {
    marginTop: 30,
    flexDirection: "row",
    gap: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#0a88ff",
    borderRadius: 8,
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: "500",
  }
});
