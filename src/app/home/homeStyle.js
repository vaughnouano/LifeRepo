import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },

  listContainer: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
  },

  navContainer: {
    gap: 6,
  },

  navToggleImg: {
    marginVertical: 12,
    alignSelf: "center",
  },
});
