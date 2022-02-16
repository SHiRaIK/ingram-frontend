import styles from '../styles/Message.module.css'

//let ownMessages = testMessages.filter(m => m.author === '__self');
//let otherMessages = testMessages.filter(m => m.author !== '__self');

export default function Message({ message }) {
  let content = () => {
    if (message.type === 'text') return <p>{message.content}</p>
    else return <p><i>Unsupported message format</i></p>
  }

  return (
    <main className={styles.main}>
      <div className={styles.author}>{message.author}</div>
      <div className={styles.date}>{message.date}</div>
      <div className={styles.content}>{content()}</div>
    </main>
  )
}