'use client'
import {React } from 'react'
import Home from './pages/homepage/Home'
import About from './pages/aboutpage/about'
import Signup from './pages/signuppage/Signup'
import Help from './pages/help&supportpage/Help'
import Login from './pages/loginpage/Login'
import Profile from './pages/profilepage/Profile'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  [
    {path: "/", element: <About/> },
    {path: "/home", element: <Home/>},
    {path: "/signup", element: <Signup/>},
    {path: "/help", element: <Help/>},
    {path: "/login", element: <Login/>},
    {path: "/profile", element: <Profile/>},


    // {path: "/sci_fi", element:},
    // {path: "/thriller", element:},
    // {path: "/stories", element:},
    // {path: "/religious", element:},
    // {path: "/study", element:},
    // {path: "/contact_us", element:},
    // {path: "/faq", element:},
    // {path: "/terms", element:},
    // {path: "/privacy", element:},
    // {path: "/refund_policy", element:},
  ]
);

function App() {

  return (
   <>
   {/* <Home/> */}
   <RouterProvider router = {router}/>
   </>
  )
}

export default App

/*
import {React, useEffect, useState } from 'react'


function App() {
  // const url = "https://jsonplaceholder.typicode.com/users";
  // const [data, setData] = useState([]);

  // const fetchInfo = () => {
  //   return fetch(url)
  //   .then((res) => res.json())
  //   .then((d) => setData(d))
  // }

  // useEffect(() => {
  //   fetchInfo();
  // }, [])

  return (
    <>
    <p className='bg-pink-400'>hello munna</p>
    
    <div>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div className='w-48 bg-green-500 p-1 rounded-md m-2.5'>
              <p>helelo</p>
              <p>id: {dataObj.id}</p>
              <p>name: {dataObj.name}</p>
              <p>username: {dataObj.username}</p>
              <p>email: {dataObj.email}</p>
              <p>phone: {dataObj.phone}</p>
              <p>website: {dataObj.website}</p>
            </div>
          );
        })}
      </center>
    </div>
    </>
  )
}

export default App
*/