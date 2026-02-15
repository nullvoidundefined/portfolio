import { Link } from "@tanstack/react-router";
import resume from "../../data/resume";
import Section from "../../components/Section/Section";
import Chip from "../../components/Chip/Chip";
import styles from "./JobDetailPage.module.scss";

interface JobDetailPageProps {
  jobId: string;
}

export default function JobDetailPage({ jobId }: JobDetailPageProps) {
  const job = resume.jobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <main className={styles.page}>
        <div className={styles.notFound}>
          <h2>Job not found</h2>
          <Link to="/">Back to home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <Link to="/" className={styles.backLink}>
        &larr; Back to resume
      </Link>

      <div className={styles.hero}>
        <h1 className={styles.jobTitle}>{job.title}</h1>
        <p className={styles.company}>{job.company}</p>
        <div className={styles.meta}>
          <span>
            {job.startDate} – {job.endDate}
          </span>
          <span>{job.location}</span>
        </div>
      </div>

      <Section title="Key Achievements">
        <ul className={styles.highlights}>
          {job.highlights.map((highlight) => (
            <li key={highlight} className={styles.highlightItem}>
              {highlight}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Technologies Used">
        <div className={styles.chips}>
          {job.technologies.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </div>
      </Section>
    </main>
  );
}
