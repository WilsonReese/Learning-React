import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderRadius: 10,
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
    height: 70,
    width: 70,
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

  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  socialBtn: {
    borderRadius: "50%",
    padding: 10,
    backgroundColor: "#eee",
  },
});
