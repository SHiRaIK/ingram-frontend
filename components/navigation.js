import styles from '../styles/Navigation.module.css'

const colors = [
  {'background-color': '#227C9D'}, 
  {'background-color': '#17C3B2'}, 
  {'background-color': '#FFCB77'}, 
  {'background-color': '#17C3B2'}, 
]

export default function Navigation() {
  const segments = colors.map(c => 
    <span style={{c}} className={styles.segment}></span>
  )

  return (
    <main className={styles.main}>
      {segments}
      {segments}
      {segments}
      {segments}
    </main>
  )
}