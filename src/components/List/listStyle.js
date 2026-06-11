import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: "#ffffff",

    // paddingVertical: "16",
    height: 78,
    alignItems: "center",
    marginVertical: "3",
    borderRadius: 12,

    borderWidth: 1,
  },

  checkList: {
    flexDirection: "row",
    marginHorizontal: 24,
  },
  checkImage: {
    justifyContent: "center",
    marginRight: 12,
  },
  checkListText: {
    flexDirection: "column",
    gap: 5,
  },

  listOption: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
