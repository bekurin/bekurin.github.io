import Header from "./component/Header";
import Menu from "./component/Menu";
import styles from "./App.module.css";
import Router from "./component/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.sidemenu}>
          <Menu />
        </div>
        <div className={styles.content}>
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
