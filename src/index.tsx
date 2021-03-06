import React from 'react'

import ReactDOM from 'react-dom/client'

import './index.css'
import reportWebVitals from './reportWebVitals'
import Routes from './routers'
// import Demo7 from "@pages/demo/Breadcrumb";

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(<Routes />)
// ReactDOM.render(<Routes />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
