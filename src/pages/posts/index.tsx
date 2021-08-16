import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return(
    <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time>12 de março de 2021</time>
          <strong>Creating a Monorepo with Lernasadoasko</strong>
          <p>in this guide... dasidjais jdijasi jdiasjdi as d</p>
        </a>
        <a href="#">
          <time>12 de março de 2021</time>
          <strong>Creating a Monorepo with Lernasadoasko d</strong>
          <p>in this guide... dasidjais jdijasi jdiasjdi as d</p>
        </a>
        <a href="#">
          <time>12 de março de 2021</time>
          <strong>Creating a Monorepo with Lernasadoasko d</strong>
          <p>in this guide... dasidjais jdijasi jdiasjdi as d</p>
        </a>
        <a href="#">
          <time>12 de março de 2021</time>
          <strong>Creating a Monorepo with Lernasadoasko d</strong>
          <p>in this guide... dasidjais jdijasi jdiasjdi as d</p>
        </a>
      </div>
    </main>
    </>
  )
}