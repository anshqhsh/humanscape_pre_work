import { useQuery } from 'react-query'

export const useList = (page: any, search: any) => {
  let url = `https://jsonplaceholder.typicode.com/todos?_page=${page}`
  if (search) {
    url += `&q=${search}`
  }

  return useQuery(['todos', { page, search }], () => fetch(url).then((res) => res.json()))
}
