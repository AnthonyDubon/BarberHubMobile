
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

//EL header controla el titulo de la barberia y las barritas que simulan el menu
// el content maneja lo que es todo el contenido que se va ver dentro del view
// el services maneja todas las targetas de services

export default function HomeScreen() {
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView style={styles.container}>
        
      <View style={styles.header}>
        <Text style={styles.logo}>BarberHub</Text>
        <Ionicons name="menu" size={28} color="#0B2A5B" />
      </View>

      <View style={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.label}>BARBERHUB</Text>

          <Text style={styles.title}>
            Tu próximo corte empieza aquí.
          </Text>

          <Text style={styles.description}>
            Elige tu servicio, selecciona tu barbero
            y reserva tu cita en pocos minutos.
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Services")}
          >
            <Text style={styles.buttonText}>
              Reservar cita
            </Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>
          Nuestros servicios
        </Text>

        <View style={styles.services}>

          <View style={styles.serviceCard}>
           <MaterialCommunityIcons name="content-cut" size={30} color="#C8102E"/>
            <Text style={styles.serviceName}>
              Corte de cabello
            </Text>
            <Text style={styles.serviceDescription}>
              Estilo a tu medida
            </Text>
          </View>

          <View style={styles.serviceCard}>
           <MaterialCommunityIcons name="face-man" size={30} color="#C8102E"
/>
            <Text style={styles.serviceName}>
              Arreglo de barba
            </Text>
            <Text style={styles.serviceDescription}>
              Cuidado y precisión
            </Text>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F9",
  },
  header: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#0B2A5B",
    fontSize: 24,
    fontWeight: "bold",
  },
  menu: {
    color: "#0B2A5B",
    fontSize: 25,
  },
  content: {
    padding: 20,
  },
  hero: {
    backgroundColor: "#0B2A5B",
    borderRadius: 18,
    padding: 24,
  },
  label: {
    color: "#F0B9C3",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 14,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    color: "#DFE6F1",
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#C8102E",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#0B2A5B",
    marginTop: 30,
    marginBottom: 16,
  },
  services: {
    flexDirection: "row",
    gap: 12,
  },
  serviceCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
  },
  serviceIcon: {
    fontSize: 26,
    marginBottom: 12,
  },
  serviceName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111827",
  },
  serviceDescription: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 6,
  },
});
