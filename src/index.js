import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from 'styled-components';

import 'normalize.css'
import './assets/css/index.less'
import theme from './assets/theme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式
  <div>
    {/* 使用react-redux工具联系redux-toolkit 与 react */}
    < Provider store={store} >
      {/* 路由 */}
      < HashRouter >
        {/* 路由懒加载 */}
        < Suspense fallback="loading" >
          {/* 主题配置 */}
          < ThemeProvider theme={theme} >
            <App />
          </ ThemeProvider >

        </Suspense >
      </HashRouter >
    </Provider >
  </div>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals