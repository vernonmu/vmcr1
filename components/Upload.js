import React, { Component } from "react";
import styles from "../styles/Upload.module.css";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadStatus: false,
    };
  }

  uploadFile = (data) => {
    const requestOptions = {
      method: "POST",
      body: data,
    };

    // console.log("data", data);

    fetch("http://localhost:3001/upload", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log("res ", res);
      });
  };

  handleUpload = (event) => {
    event.preventDefault();

    let data = new FormData();
    const csv = event.target.files[0];

    data.append("csvFile", csv);

    this.uploadFile(data);
    this.setState({
      uploadStatus: false,
    });
  };

  render() {
    const { uploadStatus } = this.state;

    return (
      <div>
        <button
          onClick={() =>
            this.setState({ uploadStatus: !this.state.uploadStatus })
          }
          className={styles.ButtonUpload}
        >
          upload
        </button>
        {uploadStatus === true && (
          <form>
            <input type="file" onChange={this.handleUpload} />
          </form>
        )}
      </div>
    );
  }
}
