import { useState } from 'react';
import styles from '../styles/Messages.module.css'
import Message from '../components/message'

export var testMessages = [
  { author: 'Bob Mayer', type: 'text', content: 'Hi!', date: '22.12.2021, 18:40' },
]

export let addMessage = null;

export default function Messages() {
  const [messages, setMessageState] = useState(testMessages);
  let msgElements = messages.map(m => <Message message={m} />)

  const add = m => setMessageState(messages.push(m));
  addMessage = add;

  return (
    <main className={styles.main}>
      <div className={styles.messages}>
        {msgElements}
      </div>
    </main>
  )
}
