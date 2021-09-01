import Link from "next/link";
import styles from "../styles/Home.module.css";

const Welcome = () => {
  return (
    <h1 className={styles.title}>
      欢迎来到
      <Link href="/">
        <a>JS大麻</a>
      </Link>
    </h1>
  );
};

export default Welcome;
