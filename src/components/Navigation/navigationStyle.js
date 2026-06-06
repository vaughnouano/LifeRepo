import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
  container: {
    padding: 4,
    gap: 3,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#ff3535",
  },

  navButton: {
    flex: 1,
    paddingVertical: 16,

    alignItems: "center",

    backgroundColor: "#ffffff",
  },
});
