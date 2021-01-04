import Head from 'next/head'
import SearchForm from '../components/searchform'
import styles from '../styles/Home.module.css'

export default function Home() {




  return (
    <div className={styles.container}>
      <Head>
        <title>Book Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchForm placeholder="Search Term"></SearchForm>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
