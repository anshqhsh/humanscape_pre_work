interface IDiseaseAPI {
  response: IResponse
}

interface IResponse {
  header: IHeader
  body: IBody
}

interface IHeader {
  resultCode: string
  resultMsg: string
}

interface IBody {
  items: IItems
  numOfRows: number
  pageNo: number
  totalCount: number
}

interface IItems {
  item?: IItem[]
}

interface IItem {
  sickCd: string
  sickNm: string
}
