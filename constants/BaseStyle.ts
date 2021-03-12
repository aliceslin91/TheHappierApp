import { StyleSheet } from "react-native";

import Colors from "./Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: Colors.primaryBackground,
  },
  header: {
    color: Colors.headerText,
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
    fontFamily: "Gill Sans",
  },
  contentContainer: {
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 8,
    margin: 8,
  },
  paragraph: {
    color: Colors.primaryText,
    padding: 8,
    fontFamily: "Gill Sans",
  },
  paragraphSelected: {
    color: Colors.primaryText,
    padding: 8,
    fontWeight: "bold",
    fontFamily: "Gill Sans",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  /* add ons*/
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
