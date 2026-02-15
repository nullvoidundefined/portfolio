import { Link } from "@tanstack/react-router";
import Chip from "../Chip/Chip";
import type { Job } from "../../data/resume";
import styles from "./JobTile.module.scss";

interface JobTileProps {
  job: Job;
}

export default function JobTile({ job }: JobTileProps) {
  return (
    <Link to="/job/$jobId" params={{ jobId: job.id }} className={styles.tile}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <span className={styles.company}>{job.company}</span>
        </div>
        <div className={styles.meta}>
          <span className={styles.dates}>
            {job.startDate} – {job.endDate}
          </span>
          <span className={styles.location}>{job.location}</span>
        </div>
      </div>
      <p className={styles.highlight}>{job.highlights[0]}</p>
      <div className={styles.chips}>
        {job.technologies.slice(0, 4).map((tech) => (
          <Chip key={tech} label={tech} />
        ))}
        {job.technologies.length > 4 && (
          <Chip label={`+${job.technologies.length - 4}`} />
        )}
      </div>
    </Link>
  );
}
