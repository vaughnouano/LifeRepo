import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "24",
    paddingVertical: "24",
  },

  dayInfo: {
    flexDirection: "column",
  },

  themeToggleContainer: {
    height: 32,
    gap: 2,
    padding: 2,
    borderRadius: 9999,
    flexDirection: "row",
  },
  themeToggleButton_active: {
    borderRadius: 9999,
    padding: 6,
    justifyContent: "center",
  },
  themeToggleButton: {
    borderRadius: 9999,
    padding: 6,
    justifyContent: "center",
  },
});
