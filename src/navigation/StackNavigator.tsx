import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import AdminDashboardScreen from "../screens/AdminDashboardScreen";

// Declarar las pantallas y sus parámetros
export type RootStackParamList = {
  MainTabs: undefined;
  AdminDashboard: { email: string };
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

      <Stack.Screen
        name="AdminDashboard"
        component={AdminDashboardScreen}
        options={{ title: "Administrador" }}
      />
    </Stack.Navigator>
  );
}