
import { useState } from "react";
import {View,Text,TextInput,Pressable,StyleSheet,Alert} from "react-native";
import CustomInput from "../components/CustomInput";

export default function AdminLoginScreen() {

  // Estados para almacenar los datos del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función que se ejecuta al presionar Iniciar sesión
  const handleLogin = () => {

    // Verificamos que los campos no estén vacíos
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Debes completar todos los campos");
      return;
    }

    // Validamos el formato del correo
    if (!email.includes("@") || !email.includes(".")) {
      Alert.alert("Error", "Ingresa un correo válido");
      return;
    }

    Alert.alert("Correcto", "Datos ingresados correctamente");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Administrador</Text>

      <Text style={styles.subtitle}>
        Inicia sesión para administrar las citas
      </Text>

      <CustomInput
      placeholder="Correo electrónico"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      />

     <CustomInput
     placeholder="Contraseña"
     value={password}
     onChangeText={setPassword}
     secureTextEntry={true}
     />

      <Pressable
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Iniciar sesión
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
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0B2A5B",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#C8102E",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
