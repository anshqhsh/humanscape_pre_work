import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { getDisease } from '../../service/getDisease'
import { RootState } from '../redux/store'

const SearchedList = () => {
  const searchString = useSelector((state: RootState) => state.searchReducer.searchString)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading, error, isError } = useQuery(
    ['getDiseaseNameApi'],
    () => getDisease({ searchText: searchString }).then((res) => res.data.response.body.items.item),
    {
      enabled: !!searchString, // enabled 는 쿼리가 자동으로 실행되지 않게 설정하는 옵션이다. searchValue가 없으면 실행 x
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
  return <div>SearchedList</div>
}
export default SearchedList
