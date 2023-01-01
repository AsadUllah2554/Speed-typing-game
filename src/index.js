import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import PointLessApp from './Components/Higher Order Components/PointLessApp';
// import RenderProps from './Components/Higher Order Components/RenderProps/RenderProps1';
// import AppToggle from './Components/Higher Order Components/Toggler/AppToggle';
// import DataApp from './Components/Higher Order Components/Data Fetcher/DataApp';
// import UseEffect from './Components/Hooks/UseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PointLessApp/>
    <RenderProps/>
      <AppToggle/>
    <DataApp/>
    <UseEffect/> */}
   <App/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
