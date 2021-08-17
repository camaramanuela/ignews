import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';
import { stringify } from 'querystring';

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
}