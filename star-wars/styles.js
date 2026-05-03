import { StyleSheet, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { cloneElement } from "react";
export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    ...Platform.select({
      ios: { paddingTop: 40 },
      android: { paddingTop: StatusBar.currentHeight },
      backgroundColor: "rgb(229, 112, 61)",
    }),
  },
  detailsScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    ...Platform.select({
      ios: { paddingTop: 40 },
      android: { paddingTop: StatusBar.currentHeight },
      backgroundColor: "rgb(229, 112, 61)",
    }),
  },
  container: {
    borderRadius: 4,
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  innerContainer: {
    backgroundColor: "rgb(255, 225, 212)",
    padding: 20,
    borderWidth: 1,
    borderColor: "rgb(229, 112, 61)",
    borderRadius: 2,
    alignItems: "center",
  },
  detailsContainer: {
    borderRadius: 4,
    padding: 20,

    gap: 15,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  detailsText: {
    fontSize: 12,
  },
  searchBox: {
    borderRadius: 4,
    borderColor: "rgb(229, 112, 61)",
    padding: 5,
    borderWidth: 1,
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
    fontWeight: "bold",
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    gap: 1,
  },

  column: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  textContainer: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  headerText: {
    fontSize: 20,
    fontStyle: "bold",
    paddingTop: 10,
    fontWeight: 700,
  },
  detailsHeader: {
    fontSize: 20,
    fontStyle: "bold",
    marginBottom: 20,
    fontWeight: 700,
  },
  textInput: {
    borderColor: "#e5703d",
    borderWidth: 1,
    width: 300,
    borderRadius: 5,
    minHeight: 30,
    paddingHorizontal: 10,
    paddingVertical: 1,
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalInner: {
    backgroundColor: "azure",
    padding: 20,
    borderWidth: 1,
    borderColor: "lightsteelblue",
    borderRadius: 2,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    margin: 5,
    color: "slategrey",
  },
  modalButton: {
    fontWeight: "bold",
    margin: 5,
    color: "slategrey",
  },
  backButton: {
    width: 150,
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: "#e5703d",
    borderRadius: 5,
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    fontWeight: 700,
  },
  textInputModal: {
    fontSize: 16,
    margin: 5,
    color: "slategrey",
    fontWeight: 700,
  },
  textInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
  },
  textInputLabel: {
    fontSize: 16,
  },

  swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 30,
    marginVertical: 15,
  },

  swipeItem: {
    width: 200,
    height: 30,
    backgroundColor: "azure",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#e5703d",
  },

  swipeItemText: {
    textAlign: "center",
    color: "#000",
  },

  swipeBlank: {
    width: 200,
    height: 30,
  },
});
