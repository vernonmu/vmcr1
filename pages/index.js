import React, { useState, useEffect } from "react";
import Head from "next/head";
import { CohortList } from "../components/CohortList";
import styles from "../styles/Home.module.css";
import Upload from "../components/Upload";

export default function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    const requestOptions = {
      method: "GET",
    };

    fetch("http://localhost:3001/", requestOptions)
      .then((res) => res.json())
      .then((studentData) => {
        console.log("res ", studentData);
        setStudents(studentData);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>GradMat UI</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <Upload />
        <span>settings</span>
        <CohortList students={students} />
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by Incline Devshop.
        </a>
      </footer>
    </div>
  );
}
