import * as React from 'react'
import ReactDOM from 'react-dom'
import { Spin } from 'antd'
import './index.scss'

let loadingCount = 0

export const ShowLoading = () => {
  if (loadingCount === 0) {
    var dom = document.createElement('div')
    dom.setAttribute('id', 'loading')
    document.body.appendChild(dom)
    ReactDOM.render(<Spin />, dom)
  }
  loadingCount++
}

export const HideLoading = () => {
  loadingCount--
  if (loadingCount === 0) {
    // @ts-ignore
    document.body.removeChild(document.getElementById('loading'))
  }
}
