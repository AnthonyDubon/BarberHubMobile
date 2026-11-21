import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function BottomNav() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.item}>
        <Ionicons name="home" size={23} color="#C8102E" />
        <Text style={styles.activeText}>Inicio</Text>
      </Pressable>

      <Pressable style={styles.item}>
        <MaterialCommunityIcons
          name="content-cut"
          size={23}
          color="#64748B"
        />
        <Text style={styles.text}>Servicios</Text>
      </Pressable>

      <Pressable style={styles.item}>
        <Ionicons name="calendar-outline" size={23} color="#64748B" />
        <Text style={styles.text}>Reservar</Text>
      </Pressable>

      <Pressable style={styles.item}>
        <Ionicons name="person-outline" size={23} color="#64748B" />
        <Text style={styles.text}>Admin</Text>
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
