import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
// import Signup from './components/signup/Signup.tsx'
// import NotFound from './components/Error/NotFound.tsx'
// import Signin from './components/signin/Signin.tsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <NotFound />
//   },
//   {
//     path: '/signup',
//     element: <Signup/>,
//     errorElement: <NotFound />
//   },
//   {
//     path: '/signin',
//     element: <Signin />,
//     errorElement: <NotFound />
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
