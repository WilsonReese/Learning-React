import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  avatar: {
    height: 50,
    width: 50,
    borderRadius: "50%",
  },

  header: {
    flexDirection: "row",
  },
});
