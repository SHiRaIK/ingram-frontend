import styles from '../styles/Chats.module.css'

const testChats = [
  { name: 'Bob Martin', hasNew: false },
  { name: 'Alice Mayer', hasNew: false },
  { name: 'Alex Mustermann', hasNew: false },
]

// TODO: Add selectedChat
export default function Chats({ names }) {
  let tiles = testChats.map(chat =>
    <div className={styles.tile}>
      <span>{chat.name}</span>
    </div>
  )

  return (
    <main className={styles.main}>
      <h3>Chats</h3>
      <div className={styles.tiles}>
        {tiles}
      </div>
    </main>
  )
}