import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ServicesScreen from "../screens/ServicesScreen";

//Declarar las pantallas y sus parámetros
export type RootStackParamList = {
  Home: undefined;
  Services: undefined;
};

// 2. Crear el navegador
const Stack = createNativeStackNavigator<RootStackParamList>();

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
    </Stack.Navigator>
  );
}
