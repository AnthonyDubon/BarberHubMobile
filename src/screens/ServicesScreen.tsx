
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const services = [
  {
    id: 1,
    name: "Corte de cabello",
    description: "Un corte personalizado para tu estilo.",
    duration: "30 min",
    price: 80,
    icon: "content-cut",
  },
  {
    id: 2,
    name: "Arreglo de barba",
    description: "Perfilado y cuidado de barba.",
    duration: "20 min",
    price: 60,
    icon: "face-man",
  },
  {
    id: 3,
    name: "Corte + barba",
    description: "El servicio completo para renovar tu imagen.",
    duration: "60 min",
    price: 180,
    icon: "auto-fix",
  },
] as const;

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nuestros servicios</Text>
      <Text style={styles.subtitle}>
        Elegí el servicio que mejor se adapte a tu estilo.
      </Text>

      {services.map((service) => (
        <View key={service.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={service.icon}
                size={28}
                color="#C8102E"
              />
            </View>

            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.duration}>{service.duration}</Text>
            </View>

            <Text style={styles.price}>L {service.price}</Text>
          </View>

          <Text style={styles.description}>
            {service.description}
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => console.log("Servicio:", service.name)}
          >
            <Text style={styles.buttonText}>
              Seleccionar servicio
            </Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F9",
    padding: 16,
  },
  title: {
    color: "#0B2A5B",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "#64748B",
    fontSize: 14,
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {
    backgroundColor: "#FFF0F2",
    padding: 12,
    borderRadius: 12,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    color: "#0B2A5B",
    fontSize: 16,
    fontWeight: "bold",
  },
  duration: {
    color: "#64748B",
    fontSize: 12,
    marginTop: 4,
  },
  price: {
    color: "#C8102E",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#64748B",
    fontSize: 14,
    marginTop: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#C8102E",
    borderRadius: 8,
    padding: 13,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
