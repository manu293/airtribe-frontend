// imports
import Head from 'next/head'

// local imports
import Header from "../components/header";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>

      <Head>
        <title>Airtribe Frontend Assignment</title>
        <meta name="description" content="Airtribe Frontend Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainSection">

        <Header 
          hText="Task Board"
          hStyle="h2"
        />
      
      </main>
      
    </div>
  )
}

export default Home;