import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import SideBar from "./containers/sidebar/sidebar";
ReactDOM.render(
<div>
  <SideBar/>
  </div>
  , document.querySelector('#root'));
