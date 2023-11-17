import Image from "next/image";
import styles from "./page.module.css";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

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
