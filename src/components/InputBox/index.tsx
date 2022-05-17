import styles from './inputBox.module.scss'

const InputBox = () => {
  // const [page, setPage] = useState(0)
  // const [search, setSearch] = useState<any>('')
  // const debouncedSearch = useDebounce(search, 500)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { isFetching, isError, data, error } = useList(page, debouncedSearch)
  return (
    <div className={styles.box}>
      <form>
        <input type='text' placeholder='Search...' />
        <button type='button'>button</button>
      </form>
    </div>
  )
}

export default InputBox
