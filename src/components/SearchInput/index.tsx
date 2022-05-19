import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import { getDisease } from '../../service/getDisease'

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('')
  // 고칠 것
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading, error, isError } = useQuery(
    ['getDiseaseNameApi', searchValue],
    () => getDisease({ searchText: searchValue }).then((res) => res.data.response.body.items.item),
    {
      enabled: !!searchValue, // enabled 는 쿼리가 자동으로 실행되지 않게 설정하는 옵션이다. searchValue가 없으면 실행 x
      staleTime: 2 * 60 * 1000, // 데이터가 fresh상태로 유지되는 시간 해당 시간이 지나면 stale상태가 된다. flesh상태에서는 쿼리가 다시 마운트 되어도 fetch 실행x
      refetchOnWindowFocus: true, // 크롬에서 다른 탭 눌렀다 다시 돌아올때 데이터를 불러온다.
      useErrorBoundary: true,
      onSuccess: (res) => {
        // eslint-disable-next-line no-console
        console.log(res)
      },
      // onSettled: (item) => {
      //   console.log(item)
      //   console.count('request')
      // },
    }
  )
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
  }

  // const onSubmit = (e: any) => {}

  return (
    <div className='{styles.searchedList}'>
      <h1>searchData</h1>
      <form>
        <input type='text' placeholder='s' onChange={onChangeHandler} />
      </form>
    </div>
  )
}
export default SearchInput
