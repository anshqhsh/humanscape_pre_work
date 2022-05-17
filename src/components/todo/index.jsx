/* eslint-disable no-nested-ternary */
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useDebounce } from 'react-use'

function useTodos(page, search) {
  let url = `https://jsonplaceholder.typicode.com/todos?_page=${page}`
  if (search) {
    url += `&q=${search}`
  }

  // see https://react-query.tanstack.com/guides/important-defaults
  // see https://react-query.tanstack.com/guides/paginated-queries
  return useQuery(
    ['todos', { page, search }],
    () => fetch(url).then((res) => res.json())
    // the following can be used to avoid refetches on already fetched data (see paginated queries docs)
    // { keepPreviousData: true, staleTime: 5 * 60 * 1000 }
  )
}

const Todos = () => {
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  const { isFetching, isError, data, error } = useTodos(page, debouncedSearch)

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  function handlePageChange(e) {
    setPage(e.target.value)
  }

  // poor man's range(1, 10)...
  const availablePages = [...Array(11).keys()]
  availablePages.shift()

  return (
    <>
      <div id='filter-container'>
        <input id='filter-search' type='text' placeholder='Search...' value={search} onChange={handleSearchChange} />
        <select id='filter-page' value={page} onChange={handlePageChange}>
          {availablePages.map((pageNum, i) => (
            <option key={`unique key ${i + 1}`} value={pageNum}>
              {pageNum}
            </option>
          ))}
        </select>
      </div>

      <div id='todos-container'>
        {isFetching ? (
          <div className='loading'>Loading...</div>
        ) : isError ? (
          <div className='error'>Error: {error.message}</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Completed?</th>
              </tr>
            </thead>
            <tbody>
              {data.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? 'yes' : 'no'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

export default Todos
