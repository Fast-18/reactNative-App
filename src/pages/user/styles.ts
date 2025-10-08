import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: Dimensions.get("window").height / 3.5,
    backgroundColor: themas.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  username: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    color: "#E0E0E0",
    fontSize: 14,
    marginTop: 4,
  },
  infoBox: {
    marginTop: 40,
    width: "85%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: themas.colors.lightGray,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: themas.colors.primary,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  infoLabel: {
    color: themas.colors.gray,
    fontSize: 16,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "600",
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  logoutText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
