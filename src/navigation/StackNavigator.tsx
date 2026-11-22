import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ServicesScreen from "../screens/ServicesScreen";
import AdminLoginScreen from "../screens/AdminLoginScreen";

//Declarar las pantallas y sus parámetros
export type RootStackParamList = {
  Home: undefined;
  Services: undefined;
  AdminLogin: undefined;
};

//Crear el navegador
const Stack = createNativeStackNavigator<RootStackParamList>();

//Registrar las pantallas
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{ title: "Servicios" }}
      />

      <Stack.Screen
        name="AdminLogin"
        component={AdminLoginScreen}
        options={{ title: "Administrador" }}
      />
    </Stack.Navigator>
  );
}