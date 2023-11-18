import Image from "next/image";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logos}>
            <div className={styles.circles}>
              <Image
                alt="Radiant circles"
                height={614}
                src="circles.svg"
                width={614}
              />
            </div>

            <div className={styles.logo} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <h1>aoc-cli</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
