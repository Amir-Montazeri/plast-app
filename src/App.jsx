import { GlobalStyles } from "@mui/material";
import AboutUs from "pages/about-us";
import ContactUs from "pages/contact-us";
import DownloadApp from "pages/download-app";
import Main from "pages/main";
// import { Navbar } from "components";
// import { Home } from "pages";
import styles from "./globalStyles";

const App = () => {
  return (
    <main>
      <GlobalStyles styles={styles} />
      {/* <Navbar />
      <Home /> */}
      {/* <Main /> */}
      {/* <AboutUs /> */}
      {/* <DownloadApp /> */}
      <ContactUs />
    </main>
  );
};

export default App;
