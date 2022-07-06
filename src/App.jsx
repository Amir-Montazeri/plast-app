import { GlobalStyles } from "@mui/material";
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
      <Main />
    </main>
  );
};

export default App;
