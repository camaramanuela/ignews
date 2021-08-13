import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title> Home | Ignews </title>
      </Head>
      <h1 className={styles.title}>Hello world with nextjs and <span>sass</span></h1>
    </>
  )
}