import { StyleSheet } from "react-native"

import { COLORS, SHADOWS, SIZES } from "../../../constants"

const styles = StyleSheet.create({
  mainCotainter: {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: "16px",
    },
  },

  container: {
    paddingHorizontal: "10px",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: "20px",
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },

  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "80%",
    height: "80%",
  },
  textContainer: {
    flex: 1,
    // paddingHorizontal: SIZES.medium,

    flexDirection: "row",
    justifyContent: "space-between",

    marginHorizontal: SIZES.medium,
  },

  jobName: {
    fontSize: SIZES.small,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },

  date: { flexDirection: "row", justifyContent: "flex-end" },

  data: {
    justifyContent: "flex-end",
    fontSize: SIZES.small,
    fontFamily: "DMRegular",
    color: "#8B93F4",
    marginTop: 3,
    textTransform: "capitalize",
  },

  time: {
    color: "black",
    justifyContent: "flex-end",
    fontSize: SIZES.small,
    fontFamily: "DMRegular",
    marginTop: 3,
    textTransform: "capitalize",
  },
})

export default styles
