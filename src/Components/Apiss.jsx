import {React, useEffect, useState } from 'react'
import BCard from './BCard'

function Apiss() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
    .then((res) => res.json())
    .then((d) => setData(d))
    .catch(error => console.error('Error in datafecthing', error));
  }

  useEffect(() => {
    fetchInfo();
  }, [])
      
  const arrayDataitems = data.map((bookdata, index)=><BCard book={bookdata}/>);
  

  return (
    <>
  
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-300'>
    {arrayDataitems}
    </div>

    </>
  )
}





export default Apiss


/*
import {React, useEffect, useState } from 'react'

function Apiss() {
  //const url = "https://jsonplaceholder.typicode.com/users";
  //const url ="https://www.googleapis.com/books/v1/volumes?q=harry+potter";
  const url = "https://www.googleapis.com/books/v1/volumes?q=SEARCH%20PHRASE";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
    .then((res) => res.json())
    .then((d) => setData(d))
    .catch(error => console.error('Error in datafecthing', error));
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  return (
    <>
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

export default Apiss
*/