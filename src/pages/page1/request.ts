import $http from '@/service'

// 返回数据类型
interface DataType {
  //根据你的接口返回值来决定
  data: any
  returnCode?: string
  success?: boolean
}

export interface DataParamsType {
  uid: number
}

export function apiGetData(url: string, params: DataParamsType) {
  return $http.get<DataType>({
    url,
    params,
    // showLoading: false,
  })
}