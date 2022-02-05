import React, { useEffect } from 'react'
import { Calendar } from 'antd'
import { apiGetData } from './request'

const Page1: React.FC = () => {
  useEffect(() => {
    apiGetData('https://getman.cn/mock/page1/test', { uid: 123 })
  }, [])

  return (
    <div>
      <Calendar />
    </div>
  )
}

export default Page1
