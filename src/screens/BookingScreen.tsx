
import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";

import CustomInput from "../components/CustomInput";

export default function BookingScreen() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleReservar = () => {
    if (nombre.trim() === "" || telefono.trim() === "") {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    if (!/^[0-9]{8}$/.test(telefono.trim())) {
      Alert.alert("Error", "El teléfono debe tener 8 dígitos");
      return;
    }

    Alert.alert(
      "Reserva",
      "Datos validados correctamente"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservar cita</Text>

      <Text style={styles.subtitle}>
        Ingresa tus datos para continuar
      </Text>

      <CustomInput
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <CustomInput
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />

      <Pressable
        style={styles.button}
        onPress={handleReservar}
      >
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
