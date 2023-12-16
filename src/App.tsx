import React from 'react';  
import Header from './component/header/Header'
import Menu from './component/menu/Menu'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidemenu}>
        <Menu />
      </div>
      <div className={styles.content}>
        <h1>나는 콘텐츠</h1>
      </div>
    </div>
  );
}

export default App;
