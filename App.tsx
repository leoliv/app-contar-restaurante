import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [client, setClient] = useState<number>(0);
  const [enable, setEnable] = useState<boolean>(false);

  function addClient() {
    if (client > 8) {
      setEnable(true);
    }
    if (client >= 0 && client < 10) {
      setClient(client + 1);
    }
    return;
  }
  function removeClient() {
    if (client < 11) {
      setEnable(false);
    }
    if (client > 0 && client <= 10) {
      setClient(client - 1);
    }
    return;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Pessoas no restaurante:</Text>
      <View style={styles.boxCount}>
        <Text style={styles.boxTitle}>{client}</Text>
      </View>
      {client == 10 && (
        <View style={styles.boxLimit}>
          <Text>Restaurante está no seu limite de pessoas.</Text>
        </View>
      )}
      <View style={styles.containerButton}>
        <TouchableOpacity
          disabled={enable}
          onPress={addClient}
          style={enable ? styles.buttonDisable : styles.button}
        >
          <Text style={styles.buttonTitle}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeClient} style={styles.button}>
          <Text style={styles.buttonTitle}>Remover</Text>
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
  buttonDisable: {
    backgroundColor: "#dddddd",
    padding: 10,
    borderRadius: 8,
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: "500",
  },
  boxLimit: {
    marginTop: 20,
    padding: 5,
    backgroundColor: "#ffb108",
    borderRadius: 4,
  },
});
