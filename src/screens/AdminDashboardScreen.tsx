import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../navigation/StackNavigator";

export default function AdminDashboardScreen() {

  const route = useRoute<
    RouteProp<RootStackParamList, "AdminDashboard">
  >();

  const { email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Panel de administración
      </Text>

      <Text style={styles.subtitle}>
        Bienvenido, {email}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Citas de hoy</Text>
        <Text style={styles.number}>0</Text>
        <Text>No hay citas registradas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F9",
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0B2A5B",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0B2A5B",
  },
  number: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#C8102E",
    marginVertical: 10,
  },
});