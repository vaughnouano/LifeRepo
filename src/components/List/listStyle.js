import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: "#ffffff",

    paddingVertical: "16",
    marginVertical: "3",
  },

  checkList: {
    flexDirection: "row",
    marginHorizontal: "24",
  },
  checkImage: {
    justifyContent: "center",
    marginRight: "12",
  },
  checkListText: {
    flexDirection: "column",
  },

  listOption: {
    justifyContent: "center",
    marginHorizontal: "10",
  },
});
