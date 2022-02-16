import styles from '../styles/TextField.module.css'
import { addMessage } from './messages';
//import { sendMessage } from '../pages/api/backend'

function handleEnter(e) {
  addMessage({
    author: '__self',
    type: 'text',
    date: Date.now(),
    content: e.target.value,
  })

  e.target.value = '';
}

export default function TextField({ placeholder, value }) {
  const setValue = (e) => value = e.target.value;
  const handleKeypress = (e) => {
    if (e.shiftKey === true && e.key === 'Enter') handleEnter(e)
  }

  return (
    <main className={styles.main}>
      <textarea
        cols="100" rows="2"
        className={styles.input}
        placeholder={placeholder}
        onChange={setValue}
        onKeyUp={handleKeypress} />
    </main>
  )
}