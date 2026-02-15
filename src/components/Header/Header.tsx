import { Link } from "@tanstack/react-router";
import styles from "./Header.module.scss";

interface HeaderProps {
  name: string;
  title: string;
}

export default function Header({ name, title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <h1 className={styles.name}>{name}</h1>
          <span className={styles.title}>{title}</span>
        </Link>
      </div>
    </header>
  );
}
