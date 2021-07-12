import Link from "next/link";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import configfile from '../lib/config.json'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1>{configfile.APP_TITLE}</h1>
        </Link>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
