import styles from "../../styles/Student.module.css";

const GeneralDetails = (props) => {
  const { username, phone, sid, gradmonth, gradyear } = props;

  return (
    <>
      <div className={styles.profileGroup}>
        <p className={styles.profileLabel}>Email</p>
        <p>
          <a href={`mailto:${username}`}>{username}</a>
        </p>
      </div>

      <div className={styles.profileGroup}>
        <p className={styles.profileLabel}>Phone</p>
        <p>
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>

      <div className={styles.profileGroup}>
        <p className={styles.profileLabel}>Target graduation</p>
        <p>
          {gradmonth} {gradyear}
        </p>
      </div>
    </>
  );
};

export default GeneralDetails;
