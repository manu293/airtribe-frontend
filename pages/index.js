// imports
import Head from 'next/head'

// local imports
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Airtribe Frontend Assignment</title>
        <meta name="description" content="Airtribe Frontend Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>This is the home page</p>
    </div>
  )
}

export default Home;