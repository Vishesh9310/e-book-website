import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Section(props) {
  var[name, setName] = useState("hello");

  const user = props.datamem.user;
  const download = props.datamem.download;

  const daily=props.datamem.daily;
  const week=props.datamem.week;
  const currentscore= props.datamem.currentscore;

  var rank;
  if(currentscore <= 2500){
    rank="Bronze";
  }else if(currentscore <= 5000 && currentscore > 2500){
    rank="Silver";
  }else if(currentscore <= 10000 && currentscore > 5000){
    rank="Gold";
  }else if(currentscore <= 15000 && currentscore > 10000){
    rank="Platinum";
  }else{
    rank="Grand Master";
  }

  return (
    <>
      <div className='bg-gradient-to-tr from-slate-300 to-purple-300 px-10 pb-10'>
        
        <div className='pt-24 w-4/5'>
          <p className='text-6xl leading-tight'>The one place for all your projects and team collaboration</p>
          <p className='pt-6 leading-tight w-2/3 text-lg'>Easily plan, collaborate, organize and deliver projects of all sizes, on time,
            using one project planning software with all the right tools put at one.</p>
          <div className='flex justify-between w-fit pt-4 pb-24 space-x-3'>
            <Link to="/home" className='bg-black border-2 p-2 border-none text-white rounded-2xl shadow-2xl shadow-black hover:bg-gray-800'>Try for free &rarr;</Link>
            <Link to="/demo" className='bg-white border-2 p-2 border-none text-black rounded-2xl shadow-2xl shadow-black hover:bg-neutral-300 flex'>Watch demo<img className='h-4 m-1' src='./src/assets/play_btn.png' /></Link>
          </div>
        </div>

        <div className='flex space-x-16 pb-10'>
          <div className='flex space-x-3 w-fit p-1'>
            <p className='text-5xl'>{user}</p>
            <p className='w-28'>Users raiting on App Store</p>
          </div>
          <div className='flex space-x-2 w-fit p-1'>
            <p className='text-5xl'>{download}M</p>
            <p className='w-28'>Downloads all over the world</p>
          </div>
        </div>

        <div className='bg-purple-400 px-10 py-20 shadow-2xl shadow-purple-800  leading-relaxed'>
          <div className='text-white w-2/5 text-12 mb-12'>
            <b>Easily plan, collaborate, organize</b> and deliver projects of all sizes, on time,
            using one project planning software with all the right tools put at one place.
          </div>

          <div className='text-white grid grid-cols-2 gap-4 lg:grid-cols-3 '>
            <div className='bg-purple-300 hover:bg-pink-400 w-fit h-fit p-4 rounded-xl shadow-2xl shadow-purple-500'>
              <p className='pb-16'>dashboard</p>
              <p className='mb-4 font-bold'>Dashboard</p>
              <p>The panel facing the driver of a vehicle or the pilot of an acraft,
                containing instuments and controls.</p>
            </div>

            <div className='bg-purple-300 hover:bg-green-400 w-fit h-fit p-4 rounded-xl shadow-2xl shadow-purple-500'>
              <p className='pb-16'>task</p>
              <p className='mb-4 font-bold'>Task</p>
              <p>Click on indivisual fastest to expand and modify them.
                Use drag and drop to assign or modify task.</p>
            </div>

            <div className='bg-purple-300 hover:bg-cyan-400 w-fit h-fit p-4 rounded-xl shadow-2xl shadow-purple-500'>
              <p className='pb-16'>agenda</p>
              <p className='mb-4 font-bold'>Agenda</p>
              <p>List and cards are the building blocks of organizing work on
                a trail board Grow from ther with task assignments.</p>
            </div>
          </div>
        </div>

      </div>

      <div className='bg-purple-50 h-fit p-24 '>
        <div className='bg-purple-100 p-24 rounded-3xl shadow-2xl shadow-purple-200 flex justify-between'>
          
          <div className='bg-purple-50 h-full w-fit p-6 rounded-3xl shadow-2xl shadow-purple-300'>
            
            <div className='flex justify-between pb-5'>
              <div className='pr-20'>
                <b>Daily</b>
                <p className='text-4xl'>4/30</p>
                <p>Daily streak: {daily}days</p>
              </div>
              <div className='p-10'>
                <p className='bg-blue-600 rounded-3xl h-full w-full'>a</p>
              </div>
            </div>
            <div className='flex justify-between pb-5'>
              <div className='pr-20'>
                <b>Weekly</b>
                <p className='text-4xl'>{week}/52</p>
                <p>Weekly streak {week}weeks</p>
              </div>
              <div className='p-10'>
                <p className='bg-blue-600 rounded-3xl h-full w-full'>a</p>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='pr-20'>
                <b>Rank</b>
                <p className='text-4xl'>{rank}</p>
                <p>Current score:{currentscore}</p>
              </div>
              <div className='p-10'>
                <p className='bg-blue-600 rounded-3xl h-full w-full'>a</p>
              </div>
            </div>
          </div>
          
          <div className='h-full w-1/2 p-20 leading-relaxed'>
            <p className='text-2xl font-bold pb-5'>Task management software that puts you in control</p>
            <p>Our cards are your portal to more orgranized work - where every single part of your task can be managed, tracked and shared with teammates.</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Section


/*
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
*/