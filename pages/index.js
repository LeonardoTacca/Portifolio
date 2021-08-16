import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar/NavBar";
import Body from "../components/body/Body";
export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Body />
    </div>
  );
}
