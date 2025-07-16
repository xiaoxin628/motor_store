import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import CrewList from './crews/CrewList'


const CrewsPage = ({crews}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1 className="text-xl font-bold  text-gray-100  bg-slate-600 p-5 text-center">Track Progress</h1>
      <div className='grid grid-cols-3 gap-3 text-xs text-gray-100 uppercase bg-slate-600 p-5'>
        <div >
          <p>Total Tag Scanned</p>
          <p className='text-3xl'> 25</p>
        </div>
        <div >
          <p>Total Unit Scanned</p>
          <p className='text-3xl'> 32</p>
        </div>
        <div className='justify-self-end text-xs text-center bg-green-700 border-2 rounded-full'>
          <button className='flex rounded-xs uppercase px-5 py-2'>
            <p className='text-2xl flex-auto'>▣</p>
            <p className='flex-auto content-center ml-1'>    Scan Tags</p>
          </button>
        </div>
      </div>

      <CrewList crews={crews}/>

    </>
           
  )
}

export default CrewsPage