import Link from "next/link";
import styles from "./page.module.css";

interface Btn {
  text: string;
  slug: string;
}

const Button = ({ text, slug }: Btn) => {
  return (
    <div>
      <Link href={`/services/${slug}`}>
        <button className={styles.btn}>
          <i className={styles.animation}></i>
          {text}
          <i className={styles.animation}></i>
        </button>
      </Link>
    </div>
  );
};

export default Button;
