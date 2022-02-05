import React, { FC, lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const LzPage1 = lazy(() => import('@/pages/page1'))
const LzPage2 = lazy(() => import('@/pages/page2'))
const LzPage3 = lazy(() => import('@/pages/page3'))

const RouterContainer: FC = () => (
  <div className="router-container">
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>
          <Route path="/" exact component={LzPage1} />
          <Route path="/page2" exact component={LzPage2} />
          <Route path="/page3" exact component={LzPage3} />
        </Switch>
      </Router>
    </Suspense>
  </div>
)

export default RouterContainer
