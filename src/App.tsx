// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Index from './view/index'
import router from './router/index';
import { RouterProvider  } from 'react-router-dom';

const App: React.FC = () => {
  return <RouterProvider router={router}/>
};

export default App;