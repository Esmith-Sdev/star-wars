import { StyleSheet, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "space-around",
    ...Platform.select({
      ios: { paddingTop: 40 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },

  box: {
    height: 100,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#080808",
    backgroundColor: "#e5703d",
  },
  planetBox: {
    height: 100,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#080808",
    backgroundColor: "#e5703d",
  },
  boxImage: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
  planetText: {
    position: "absolute",
  },
  boxText: {
    color: "#f0ece1",
    fontWeight: "bold",
    textAlign: "center",
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
    gap: 1,
  },

  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },
  textContainer: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  headerText: {
    fontSize: 20,
    fontStyle: "bold",
    paddingTop: 20,
  },
});
