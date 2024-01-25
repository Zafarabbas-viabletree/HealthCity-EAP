// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Fonts, Images } from "../../../theme";

export default StyleSheet.create({
  EAPSec: {
    width: "100%",
    height: "100%",
    padding: "70px 0",
    backgroundColor: Colors.white,
    background: Colors.background.secondary,
    "@media (max-width: 991px)": {
      // marginTop: "30px",
      padding: "30px 0",
    },
  },
  EAPInnerCont: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    "@media (max-width: 1199px)": {
      flexDirection: "column",
    },
  },
  EAPTextCont: {
    width: 480,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    "@media (max-width: 1199px)": {
      width: "100%",
    },
  },
  EAPHeading: {
    fontSize: 40,
    lineHeight: 1.47,
    fontWeight: 600,
    color: Colors.text.primary,
    textAlign: "center",
    textTransform: "capitalize",
    marginBottom: 36,
    "@media (max-width: 600px)": {
      fontSize: 30,
      marginBottom: 26,
    },
  },
  eapText: {
    color: Colors.text.secondary,
    marginBottom: 30,
    lineHeight: 1.5,
  },
  eapexample: {
    color: Colors.text.secondary,
    marginBottom: 22,
    lineHeight: 1.5,
  },
  exampleList: {
    color: Colors.background.primary,
    lineHeight: "34px",
  },
  exampleListSpan: {
    color: Colors.text.secondary,
  },
  eapImgOne: {
    width: 526,
    marginBottom: 53,
    "@media (max-width: 1199px)": {
      marginTop: 30,
      marginBottom: 0,
      width: "100%",
    },
  },
  eapImgTwo: {
    width: 480,
    "@media (max-width: 1199px)": {
      width: "100%",
    },
  },
  EAPInerContTwo: {
    width: 550,
    lineHeight: 1.47,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 1199px)": {
      width: "100%",
      flexDirection: "column-reverse",
      marginTop: 50,
    },
  },
  eapTextTwo: {
    color: Colors.text.secondary,
    marginBottom: 30,
  },
  eapTextTwoCont: {
    width: 520,
    "@media (max-width: 1199px)": {
      width: "100%",
    },
  },
  eapBoxCont: {
    display: "flex",
    flexWrap: "wrap",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
});
