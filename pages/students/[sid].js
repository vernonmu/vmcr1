import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";
import GeneralDetails from "./GeneralDetails";
import InternshipDetails from "./InternshipDetails";
import { Tabs, Tab } from "react-bootstrap";
import NotesDetails from "./NotesDetails";
import styles from "../../styles/Student.module.css";
import config from '../../lib/config.json'

const fetcher = (url) => fetch(url).then((r) => r.json());

const Student = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({});
  const router = useRouter();
  const { sid } = router.query;

  const { data = [], error } = useSWR("http://localhost:3001/", fetcher);

  const currentStudent = data.find((student) => student.sid === sid) || null;

  if (!currentStudent) {
    return <p>No student found</p>;
  }

  const updateStorage = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const parseStorage = () => {
    let fetchedNotes = null;
    const retrievedNotes = localStorage.getItem("notes");
    fetchedNotes = retrievedNotes ? JSON.parse(retrievedNotes) : [];

    setNotes(fetchedNotes);
  };

  const {
    username,
    lastname,
    firstname,
    company,
    enddate,
    phone,
    successstart,
    internshipgroup,
    gradmonth,
    gradyear,
    salary,
    startdate,
  } = currentStudent;

  console.log("currentStudent", currentStudent);

  const handleSubmitNote = (e) => {
    e.preventDefault();
    // setNote(e.target.value);
    console.log("submit note ", note);

    updateStorage();
    setNotes([...notes, note]);
    setNote({ body: "" });
  };

  const onTextChange = (e) => {
    e.preventDefault();
    const note = {
      body: e.target.value,
      timeStamp: new Date().toLocaleString(),
    };
    console.log("note ", note);

    setNote(note);
  };

  const generalData = { username, phone, sid, gradmonth, gradyear };
  const internshipData = {
    successstart,
    internshipgroup,
    company,
    startdate,
    enddate,
    salary,
  };
  const notesDetails = { handleSubmitNote, note, onTextChange, notes };

  // useEffect(() => {
  //   () => parseStorage();
  // }, []);

  // useEffect(() => {
  //   updateStorage();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [notes]);

  return (
    <>
      <Head>
        <title>
          {firstname} {lastname} | GradMat
        </title>
      </Head>
      <div className={styles.container}>
        <span className={styles.navLabel}>{config.PERSON_TYPE_LABEL} Profile - id {sid}</span>
        <h2>
          {firstname.toLowerCase()} {lastname.toLowerCase()}
        </h2>

        <div className={styles.row}>
          <div className={styles.generalContainer}>
            <GeneralDetails {...generalData} />
          </div>
          <div className={styles.internContainer}>
            <InternshipDetails {...internshipData} />
          </div>
          <div className={styles.tabs}>
            <Tabs defaultActiveKey="notes" id="uncontrolled-tab-example">
              <Tab eventKey="assignments" title="Assignments">
                <ul>
                  <li>Assignment 1</li>
                  <li>Assignment 2</li>
                  <li>Assignment 3</li>
                  <button>add assignment</button>
                </ul>
              </Tab>
              <Tab eventKey="notes" title="Notes">
                <NotesDetails {...notesDetails} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
