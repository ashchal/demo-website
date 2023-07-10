import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <a
            href="https://www.codniv.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codniv
          </a>
        </p>
      </div>

      <div className={styles.center}>ASHCHAL SHRESTHA</div>
    </main>
  );
}
