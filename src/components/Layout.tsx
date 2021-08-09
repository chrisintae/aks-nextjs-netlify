import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/components/layout.module.scss'

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
          <title>akcolades</title>
          <meta name="description" content="akcolades" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
          {children}
      </main>
    </>
  );
}

const Header = () => {
  return (
      <header className={styles.header}>
          <div className={styles.container}>
              <Link href='/' passHref>
                  <div className={styles.logo}>
                      akcolades
                  </div>
              </Link>
              <Nav />
          </div >
      </header >
  )
}

const Nav = () => {
  return (
      <nav className={styles.nav}>
          <ul>
              <li>Fresh.</li>
              <li>Me.</li>
          </ul>
      </nav>
  )
}