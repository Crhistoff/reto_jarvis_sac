import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import UsersProvider from './store/User/UserProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>,
)
