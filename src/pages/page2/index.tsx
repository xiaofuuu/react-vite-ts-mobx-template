import React from 'react'
import { DatePicker } from 'antd'

const Page2: React.FC = () => (
  <div>
    <DatePicker onChange={onChange} />
  </div>
)

function onChange(date: any, dateString: string) {
  console.log(date, dateString)
}

export default Page2
