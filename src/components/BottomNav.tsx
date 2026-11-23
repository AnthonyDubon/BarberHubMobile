
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type BottomNavProps = {
  activeScreen: string;
  onNavigate: (screen: "Home" | "Services" | "AdminLogin") => void;
};

export default function BottomNav({
  activeScreen,
  onNavigate,
}: BottomNavProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.item}
        onPress={() => onNavigate("Home")}
      >
        <Ionicons
          name="home"
          size={23}
          color={activeScreen === "Home" ? "#C8102E" : "#64748B"}
        />
        <Text
          style={activeScreen === "Home" ? styles.activeText : styles.text}
        >
          Inicio
        </Text>
      </Pressable>

      <Pressable
        style={styles.item}
        onPress={() => onNavigate("Services")}
      >
        <MaterialCommunityIcons
          name="content-cut"
          size={23}
          color={activeScreen === "Services" ? "#C8102E" : "#64748B"}
        />
        <Text
          style={activeScreen === "Services" ? styles.activeText : styles.text}
        >
          Servicios
        </Text>
      </Pressable>

      <Pressable style={styles.item}>
        <Ionicons
          name="calendar-outline"
          size={23}
          color="#64748B"
        />
        <Text style={styles.text}>Reservar</Text>
      </Pressable>

      <Pressable
        style={styles.item}
        onPress={() => onNavigate("AdminLogin")}
      >
        <Ionicons
          name="person-outline"
          size={23}
          color={activeScreen === "AdminLogin" ? "#C8102E" : "#64748B"}
        />
        <Text
          style={activeScreen === "AdminLogin" ? styles.activeText : styles.text}
        >
          Admin
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingVertical: 12,
    justifyContent: "space-around",
  },
  item: {
    alignItems: "center",
    gap: 4,
  },
  text: {
    color: "#64748B",
    fontSize: 11,
  },
  activeText: {
    color: "#C8102E",
    fontSize: 11,
    fontWeight: "bold",
  },
});
