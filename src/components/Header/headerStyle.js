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
    flexDirection: "row",
    padding: 2,
    backgroundColor: "#000000",
  },
  themeToggleButton_active: {
    justifyContent: "center",

    padding: 6,
    backgroundColor: "#ffffff",
  },
  themeToggleButton: {
    justifyContent: "center",

    padding: 6,
  },
});
