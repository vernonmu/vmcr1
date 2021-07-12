import styles from "../../styles/Notes.module.css";

const NotesDetails = (props) => {
  const { handleSubmitNote, note, onTextChange, notes } = props;

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmitNote}>
        <input
          type="textarea"
          placeholder="type note here"
          onChange={onTextChange}
          value={note.body}
        />
        <button className={styles.submitButton} type="submit">
          submit
        </button>
      </form>
      {notes.map((el, idx) => {
        return (
          <>
            <p key={idx} className={styles.noteBody}>
              {el.body}
            </p>
            <span className={styles.timeStamp}>{el.timeStamp}</span>
          </>
        );
      })}
    </div>
  );
};

export default NotesDetails;
