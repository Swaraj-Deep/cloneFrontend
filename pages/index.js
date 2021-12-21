import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bus Ticket booking platform
        </h1>

        <p className={styles.description}>
          Explore the system
        </p>

        <div className={styles.grid}>
          <p className={styles.card}>
            Register yourself
          </p>

          <p className={styles.card}>
            Register Bus
          </p>

          <p className={styles.card}>
            Register your Company
          </p>

          <p className={styles.card}>
            Register your cabin crew
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by{' '}
        <span className={styles.code}>
            Swaraj Deep
          </span>
      </footer>
    </div>
  )
}
