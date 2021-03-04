import { StyleSheet } from "react-native";

import Colors from "./Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
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
    padding: 8,
  },
  paragraph: {
    color: Colors.primaryText,
    padding: 8,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default styles;
