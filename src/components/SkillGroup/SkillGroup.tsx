import Chip from "../Chip/Chip";
import styles from "./SkillGroup.module.scss";

interface SkillGroupProps {
  category: string;
  skills: string[];
}

export default function SkillGroup({ category, skills }: SkillGroupProps) {
  return (
    <div className={styles.group}>
      <h3 className={styles.category}>{category}</h3>
      <div className={styles.chips}>
        {skills.map((skill) => (
          <Chip key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}
