import styles from "../../styles/Student.module.css";

const InternshipDetails = (props) => {
  const {
    successstart,
    internshipgroup,
    company,
    startdate,
    enddate,
    salary,
  } = props;

  return (
    <>
      <div className={styles.profileGroup}>
        <p className={styles.profileLabel}>Success Date</p>
        <p>{successstart}</p>
      </div>

      <div className={styles.profileGroup}>
        <p className={styles.profileLabel}>Insternship Group</p>
        <p>{internshipgroup}</p>
      </div>
      <div className={styles.profileGroup}>
        <p className={styles.profileLabel}>Company</p>
        <p>{company}</p>
      </div>
      <div className={styles.profileGroup}>
        <p className={styles.profileLabel}>Internship Start Date</p>
        <p>{startdate}</p>
      </div>
      <div className={styles.profileGroup}>
        <p className={styles.profileLabel}>Internship End Date</p>
        <p>{enddate}</p>
      </div>
      <div className={styles.profileGroup}>
        <p className={styles.profileLabel}>Salary</p>
        <p>{salary}</p>
      </div>
    </>
  );
};

export default InternshipDetails;
