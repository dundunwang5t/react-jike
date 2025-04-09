import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 先导入 antd 样式文件
import 'antd/es/style/index';
// 再导入全局样式文件，防止样式覆盖！
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

