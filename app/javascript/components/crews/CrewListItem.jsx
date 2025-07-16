import React, { useState, useEffect } from 'react'


function CrewListItem ({crew}) {

  return (
     <>
                  <td className='font-bold'>{crew.id}</td>
                  <td className='truncate font-bold'>{crew.name}</td>
                  <td>{crew.time}</td>
                  <td className={crew.done ? "text-emerald-500" : "text-orange-500"}>{crew.done ?  <i className="fa fa-check"></i> : <i className="fa fa-close"></i> }</td>
                  <td>{crew.quantity}</td>
                  <td className='flex'>
                    <p className='rounded-full bg-orange-500 mt-2 px-2 '>
                      <i className="fa fa-trash text-white"></i>
                    </p>
                    <p className='rounded-full bg-emerald-500 mt-2 mx-2 px-2 '>
                      <i className="fa-solid fa-pen text-white"></i>
                    </p>
                    
                  </td>
     </>
  )
}

export default CrewListItem