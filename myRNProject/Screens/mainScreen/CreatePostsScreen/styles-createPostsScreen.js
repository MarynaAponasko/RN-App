import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  camera: {
    height: 240,
    top: 32,
    bottom: 8,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  cameraLabel: {
    top: 8,
    bottom: 32,
    left: 16,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  photoWraper: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 30,
  },
  photoButton: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 50,
  },
  titleInput: {
    height: 50,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  locationInput: {
    height: 50,
    paddingLeft: 28,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  locationIcon: {
    position: "absolute",
    top: 13,
  },
  sendButton: {
    height: 51,
    marginHorizontal: 16,
    marginTop: 32,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
});
