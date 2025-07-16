import React, { useState, useEffect } from 'react'
import CrewListItem from './CrewListItem';

function CrewList ({crews}) {

  return (
     <>
            <table className="w-auto h-auto text-lg text-gray-500 text-center">
            <thead className='text-xl text-gray-100 uppercase bg-slate-500'>
                <tr className='h-12'>
                  <th scope="col" className="px-6 py-3">TAG</th>
                  <th scope="col" className="px-6 py-3">CREW</th>
                  <th scope="col" className="px-6 py-3">TIME</th>
                  <th scope="col" className="px-6 py-3">tick</th>
                  <th scope="col" className="px-6 py-3">QUANTITY</th>
                  <th scope="col" className="px-6 py-3">ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {crews.map((crew) => (
                  <tr className='odd:bg-white even:bg-gray-200 h-12' key={crew.id}>
                    <CrewListItem key={crew.id} crew={crew} />
                  </tr>
                ))}
            </tbody>
            </table>
     </>
  )
}

export default CrewList