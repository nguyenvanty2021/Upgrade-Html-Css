import styles from "./App.module.scss";
import Body from "./components/banner";
import Header from "./components/header";

function App() {
  return (
    <div className={styles["home-page"]}>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
