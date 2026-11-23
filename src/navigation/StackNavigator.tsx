import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

// Declarar las pantallas y sus parámetros
export type RootStackParamList = {
  Home: undefined;
  Services: undefined;
  MainTabs: undefined;
  AdminLogin: undefined;
};

// Crear el navegador
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
