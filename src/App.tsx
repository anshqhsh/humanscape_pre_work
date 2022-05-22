import styles from './app.module.scss'
import SearchedList from './components/SearchedList'
import SearchInput from './components/SearchInput'

const App = () => {
  return (
    <main className={styles.app}>
      <h1 className={styles.header}>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h1>

      <SearchInput />
      <SearchedList />
    </main>
  )
}

export default App
