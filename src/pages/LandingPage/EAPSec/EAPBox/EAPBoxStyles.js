// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../../../theme";

export default StyleSheet.create({
  eapBoxCont: {
    ":nth-child(odd)": {
      margin: "20px auto",
    },
    alignSelf: "baseline",
    marginBottom: 25,
    cursor: "pointer",
    "@media (max-width: 600px)": {
      marginTop: 20,
    },
  },
  eapBox: {
    background: Colors.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    alignItems: "center",
    height: "300px",
    padding: 30,
    color: Colors.text.primary,
    boxShadow: "rgba(178, 126, 55, 0.5) 1px 1px 6px 2px",
    "@media (max-width: 767px)": {
      justifyContent: "center",
    },
    ":hover": {
      boxShadow: "rgba(29, 105, 142, 0.5) 1px 1px 6px 2px",
      color: Colors.background.primary,
    },
  },
  eapIcon: {
    fontSize: 32,
  },
  eapTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  eapDesc: {
    lineHeight: 1.47,
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
  },
});
