
import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";

import CustomInput from "../components/CustomInput";
import { useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import type { RootTabParamList } from "../navigation/TabNavigator";

export default function BookingScreen() {
  const route = useRoute<RouteProp<RootTabParamList, "Booking">>();
  const servicio = route.params?.servicio;
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const [submitted, setSubmitted] = useState(false);

const nombreError = submitted && nombre.trim() === "";

const telefonoError =
  submitted && !/^[0-9]{8}$/.test(telefono.trim());

const reservaValida =
  submitted && !nombreError && !telefonoError;

  const handleReservar = () => {
  setSubmitted(true);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservar cita</Text>

      <Text style={styles.subtitle}>
        Ingresa tus datos para continuar
      </Text>

      <Text style={styles.selectedService}>
      Servicio: {servicio ?? "Sin seleccionar"}
      </Text>

      <CustomInput
      placeholder="Nombre completo"
      value={nombre}
      onChangeText={setNombre}
      error={nombreError}
      />

    {nombreError && (
     <Text style={styles.errorText}>
    El nombre es obligatorio
     </Text>
    )}

   <CustomInput
    placeholder="Teléfono"
    value={telefono}
    onChangeText={setTelefono}
    keyboardType="phone-pad"
    error={telefonoError}
    />

{telefonoError && (
  <Text style={styles.errorText}>
    El teléfono debe tener 8 dígitos
  </Text>
)}

      <Pressable
        style={styles.button}
        onPress={handleReservar}
      >
        {reservaValida && (
     <Text style={styles.successText}>
      Datos validados correctamente
     </Text>
    )}
        <Text style={styles.buttonText}>
          Continuar
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F9",
    padding: 25,
  },
  selectedService: {
  backgroundColor: "#FFFFFF",
  color: "#0B2A5B",
  fontSize: 16,
  fontWeight: "bold",
  padding: 15,
  borderRadius: 10,
  marginBottom: 20,
  },
  errorText: {
  color: "#C8102E",
  fontSize: 12,
  marginBottom: 15,
},
successText: {
  color: "#15803D",
  fontSize: 14,
  textAlign: "center",
  marginTop: 15,
},
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0B2A5B",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#C8102E",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
