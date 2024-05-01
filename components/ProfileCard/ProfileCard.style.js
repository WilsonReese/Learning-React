import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
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

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },

  texts: {
    flex: 1,
    paddingLeft: 10,
  },

  header: {
    flexDirection: "row",
  },

  social: {},
});
