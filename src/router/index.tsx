import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const LzPage1 = React.lazy(() => import('@pages/page1'));
const LzPage2 = React.lazy(() => import('@pages/page2'));
const LzPage3 = React.lazy(() => import('@pages/page3'));

const RouterContainer: React.FC = () => (
  <div className="router-container">
    <React.Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>
          <Route path="/page1" component={LzPage1} />
          <Route path="/page2" component={LzPage2} />
          <Route path="/page3" component={LzPage3} />
        </Switch>
      </Router>
    </React.Suspense>
  </div>
);

export default RouterContainer;
