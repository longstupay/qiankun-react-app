// import ReactDOM from 'react-dom';
import * as ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import VueApp from "./componet/Vue";
import NgApp from "./componet/Ng";

registerMicroApps([
  {
    name: 'ng-app', // app name registered
    entry: 'https://qiankun-slaver-2-1025280-1306059885.ap-guangzhou.run.tcloudbase.com/',
    container: '#Container3',
    activeRule: '/app3',
  },
  {
    name: 'vue-app',
    entry: 'https://qiankun-slaver-1-1025280-1306059885.ap-guangzhou.run.tcloudbase.com/',
    container: '#Container2',
    activeRule: '/myapp2',
  },
],{
  beforeLoad: [async (app) => console.log('before load', app.name)],
  beforeMount: [async (app) => console.log('before mount', app.name)],
});

start();

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as Element);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="myapp2" element={<VueApp />} />
      <Route path="app3" element={<NgApp />} />
    </Routes>
  </BrowserRouter>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
