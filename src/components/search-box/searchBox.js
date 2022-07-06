export const containerStyles = {
    width: "100vw",
  },
  mainContainerStyles = {
    height: "260px",
    width: "100vw",
    background: "#C9DAE2",
    "@media screen and (max-width: 550px)": {
      height: "193px",
    },
  },
  searchbarContainerStyles = {
    width: "60% !important",
  },
  inputContainerStyles = {
    width: "400px",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    outline: "none !important",
    border: "none !important",
    borderRadius: "13px",
    overflow: "hidden",
    "> *": {
      display: "flex",
      justifyContent: "space-between",
    },
    "@media screen and (max-width: 645px)": {
      height: "41px",
    },
  },
  inputStyles = {
    padding: "0 7px",
    direction: "rtl",
    ml: 1,
    flex: 1,
  },
  submitBtnStyles = {
    margin: "15px 20px",
    padding: "5px 60px",
    background: "#005078",
    color: "#fff",
    borderRadius: "20px",
  },
  selectContainerStyles = {
    width: "30%",
    display: "flex",
    flexWrap: "no-wrap",
    alignItems: "center",
    background: "#F1F8FC",
    border: "none !important",
    flexDirection: "row-reverse",
    borderRadius: "0 !important",
    "*": {
      border: "none !important",
      outline: "none !important",
    },
    "@media screen and (max-width: 645px)": {
      width: "110px",
    },
  },
  logoContainer = {
    height: "60%",
    "> img": {
      height: "100%",
    },
    "@media screen and (max-width: 630px)": {
      height: "auto",
      width: "35%",
      "> img": {
        height: "auto",
        width: "100%",
      },
    },
  };
