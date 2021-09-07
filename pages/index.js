import { useState } from 'react'
import Head from 'next/head'
import { Button } from '../components/Button'
import GitHub from '../components/icons/GitHub'
import styles from '../styles/Home.module.css'

import {loginWithGitHub} from '../firebase/client';

export default function Home() {

  const [user, setUser] = useState(null)

  const handleClick = () => {
    loginWithGitHub().then(user => {
      const { avatar, username, url } = user;
      setUser(user)

      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <section className={styles.container}>
      <Head>
        <title>TwClone 🐦</title>
        <meta name="description" content="Twitter clone by Francisco Veiras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src='/logo.png' alt='logo'/>
        <h1>TwClone</h1>
        <h2>Start talking to other humans.<br /> welcome 📱👨‍💻</h2>
        <div> 
          <Button onClick={handleClick}>
            Login with GitHub
            <GitHub />
          </Button>
        </div>
      </main>
      <style jsx>{`
          img {
            width: 140px;
            margin: 0px;
          }
          h1 {
            color: var(--primary);
            font-size: 25px;
            margin-bottom: 10px;
            font-weight: 800;
          }
          h2 {
            color: var(--secondary);
            font-size: 20px;
            margin: 0;
            text-align: center;
          }
          div {
            margin-top: 16px;
          }
        `}</style>
    </section>
  )
}
