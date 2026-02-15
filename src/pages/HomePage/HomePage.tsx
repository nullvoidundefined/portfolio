import resume from "../../data/resume";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Section from "../../components/Section/Section";
import JobTile from "../../components/JobTile/JobTile";
import SkillGroup from "../../components/SkillGroup/SkillGroup";
import styles from "./HomePage.module.scss";

const contactItems = [
  { icon: "\u2709", label: resume.email, href: `mailto:${resume.email}` },
  { icon: "\uD83D\uDCDE", label: resume.phone },
  { icon: "\uD83D\uDCCD", label: resume.location },
  {
    icon: "\uD83D\uDD17",
    label: "LinkedIn",
    href: `https://${resume.linkedin}`,
  },
  { icon: "\uD83D\uDCBB", label: "GitHub", href: `https://${resume.github}` },
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.name}>{resume.name}</h1>
        <p className={styles.title}>{resume.title}</p>
        <ContactInfo items={contactItems} />
      </div>

      <Section title="Professional Summary">
        <p className={styles.summary}>{resume.summary}</p>
      </Section>

      <Section title="Selected Impact">
        <ul className={styles.impactList}>
          {resume.selectedImpact.map((item) => (
            <li key={item} className={styles.impactItem}>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Professional Experience">
        {resume.jobs.map((job) => (
          <JobTile key={job.id} job={job} />
        ))}
      </Section>

      <Section title="Skills">
        {Object.entries(resume.skills).map(([category, skills]) => (
          <SkillGroup key={category} category={category} skills={skills} />
        ))}
      </Section>

      {resume.education.length > 0 && (
        <Section title="Education">
          {resume.education.map((edu) => (
            <div key={edu.institution} className={styles.education}>
              <div className={styles.eduHeader}>
                <div>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <span className={styles.institution}>{edu.institution}</span>
                </div>
                <div className={styles.eduMeta}>
                  <span className={styles.gradDate}>
                    {edu.graduationDate}
                  </span>
                  <span className={styles.eduLocation}>{edu.location}</span>
                </div>
              </div>
              {edu.details && (
                <ul className={styles.eduDetails}>
                  {edu.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>
      )}
    </main>
  );
}
