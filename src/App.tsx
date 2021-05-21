import React from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react';
import { HashRouter as Router } from 'react-router-dom';
import Nav from '~/components/Nav';
import RouterContainer from './router/index';
import globStore from './store/glob';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <div className='content'>
          <Button onClick={globStore.add}>+</Button>
          <h3>
            当前值：
            {globStore.count}
          </h3>
          <h3>
            计算属性：
            {globStore.compGet}
          </h3>
          <Button onClick={globStore.sub}>-</Button>
        </div>
        <RouterContainer />
      </Router>
    </div>
  );
}

export default observer(App);
