import Head from 'next/head'
import Chats from '../components/chats'
import Messages from '../components/messages'
import Navigation from '../components/navigation'
import TextField from '../components/textfield'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ingram</title>
        <meta name="description" content="A simple peer-to-peer messenger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className={styles.main}>
        <Chats className={styles.chats}/>
        <div className={styles.wrapper}>
          <Messages />
          <span className={styles.inputWrapper}>
            <TextField placeholder="Enter message..." className={styles.input}/>
          </span>
        </div>
      </main>
    </div>
  )
}