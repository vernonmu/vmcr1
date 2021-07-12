import React from "react";
import Link from "next/link";
import styles from "../styles/CohortList.module.css";

export const CohortList = (props) => {
  const { students } = props;

  return (
    <div className={styles.studentList}>
      {students.map((el) => {
        const fullName = `${el.firstname} ${el.lastname}` || "";

        return (
          <div className={styles.row} key={el.username}>
            <Link href={`/students/${el.sid}`}>
              <span className={styles.name}>{fullName.toLowerCase()}</span>
            </Link>
            <span className={styles.pill}>
              {el.gradmonth} {el.gradyear}
            </span>
          </div>
        );
      })}
    </div>
  );
};
