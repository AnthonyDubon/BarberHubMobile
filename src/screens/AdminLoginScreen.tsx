
import { useState } from "react";
import {View,Text,TextInput,Pressable,StyleSheet,Alert} from "react-native";
import CustomInput from "../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";

export default function AdminLoginScreen() {

  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Estados para almacenar los datos del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const emailError =
  submitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const passwordError =
  submitted && password.trim() === "";

  // Función que se ejecuta al presionar Iniciar sesión
  const handleLogin = () => {
  setSubmitted(true);

  if (email.trim() === "" || password.trim() === "") {
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return;
}

  navigation.navigate("AdminDashboard", {
  email: email.trim(),
   });
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
     error={emailError}
     />

    {emailError && (
    <Text style={styles.errorText}>
    Ingresa un correo válido
    </Text>
    )}

     <CustomInput
     placeholder="Contraseña"
     value={password}
     onChangeText={setPassword}
     secureTextEntry={true}
     error={passwordError}
    />

    {passwordError && (
    <Text style={styles.errorText}>
    La contraseña es obligatoria
    </Text>
    )}

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
  errorText: {
  color: "#C8102E",
  fontSize: 12,
  marginBottom: 15,
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
