import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Button } from 'antd'
import { observer } from 'mobx-react'
import Nav from '@/components/Nav'
import RouterContainer from '@/router/index'
import globStore from '@/store/glob'
import '@/styles/App.scss'

function App() {
  const { add, count, compGet, sub } = globStore

  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="content">
          <Button onClick={add}>+</Button>
          <h3>
            当前值：
            {count}
          </h3>
          <h3>
            计算属性：
            {compGet}
          </h3>
          <Button onClick={sub}>-</Button>
        </div>
        <RouterContainer />
      </Router>
    </div>
  )
}

export default observer(App)
