import styles from "./app.module.scss";
import Background from "./components/Background";
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className={styles.app}>
     <Background />

     <div className={styles.content}>
       <HomePage />
     </div>
    </div>
  );
}

export default App;
