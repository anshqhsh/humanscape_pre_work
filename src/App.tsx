import { QueryClient, QueryClientProvider } from 'react-query'
import styles from './app.module.scss'
import InputBox from './components/InputBox'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <InputBox />
      </div>
    </QueryClientProvider>
  )
}

export default App
