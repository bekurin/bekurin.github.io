import Header from './component/header';
import Menu from './component/menu'
import styles from './App.module.css'
import Router from './component/router';
import { BrowserRouter } from 'react-router-dom';

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
