import styles from "./Chip.module.scss";

interface ChipProps {
  label: string;
}

export default function Chip({ label }: ChipProps) {
  return <span className={styles.chip}>{label}</span>;
}
