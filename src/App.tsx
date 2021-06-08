import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react';
import { HashRouter as Router } from 'react-router-dom';
import Nav from '~/components/Nav';
import RouterContainer from './router/index';
import globStore from './store/glob';
import './App.scss';
import { httpGet } from '~/utils/request';

function App() {
  const { add, count, compGet, sub } = globStore;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await httpGet('https://getman.cn/mock/demo01');
    console.log(data);
  };

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
  );
}

export default observer(App);
