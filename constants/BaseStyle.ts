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
  },
  contentContainer: {
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 8,
    margin: 8,
  },
  paragraph: {
    color: Colors.primaryText,
    padding: 8,
  },
  paragraphSelected: {
    color: Colors.primaryText,
    padding: 8,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default styles;
