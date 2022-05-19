import axios from 'axios'

const BASE_URL = '/B551182/diseaseInfoService/getDissNameCodeList'

interface Params {
  searchText: string
}

export const getDisease = (params: Params) =>
  axios.get<IDiseaseAPI>(`${BASE_URL}`, {
    params: {
      sickType: 1,
      medTp: 2,
      diseaseType: 'SICK_NM',
      ...params,
      serviceKey: process.env.REACT_APP_API_KEY,
      _type: 'json',
    },
  })
