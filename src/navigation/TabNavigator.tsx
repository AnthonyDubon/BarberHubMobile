
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ServicesScreen from "../screens/ServicesScreen";
import AdminLoginScreen from "../screens/AdminLoginScreen";
import BookingScreen from "../screens/BookingScreen";

// Declarar las pantallas del navegador de pestañas
export type RootTabParamList = {
  Home: undefined;
  Services: undefined;
  Booking: { servicio?: string } | undefined;
  AdminLogin: undefined;
};

// Crear el navegador
const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#C8102E",
        tabBarInactiveTintColor: "#64748B",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E5E7EB",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          title: "Servicios",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="content-cut"
              size={size}
              color={color}
            />
          ),
        }}
      />

     <Tab.Screen
       name="Booking"
       component={BookingScreen}
       options={{
        title: "Reservar",
        tabBarIcon: ({ color, size }) => (
        <Ionicons
        name="calendar-outline"
        size={size}
        color={color}
        />
        ),
       }}
      />

      <Tab.Screen
        name="AdminLogin"
        component={AdminLoginScreen}
        options={{
          title: "Admin",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

