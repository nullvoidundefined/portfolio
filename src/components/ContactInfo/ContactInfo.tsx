import styles from "./ContactInfo.module.scss";

interface ContactItem {
  icon: string;
  label: string;
  href?: string;
}

interface ContactInfoProps {
  items: ContactItem[];
}

export default function ContactInfo({ items }: ContactInfoProps) {
  return (
    <div className={styles.contactInfo}>
      {items.map((item) => (
        <span key={item.label} className={styles.item}>
          <span className={styles.icon}>{item.icon}</span>
          {item.href ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
