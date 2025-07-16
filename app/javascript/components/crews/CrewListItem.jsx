import React, { useState, useEffect } from 'react'

function CrewListItem ({crew}) {

  return (
     <>
                  <td>{crew.id}</td>
                  <td className='truncate'>{crew.name}</td>
                  <td>{crew.time}</td>
                  <td>{crew.done ?  "✔"  : "✘"}</td>
                  <td>{crew.quantity}</td>
                  <td>actions</td>
     </>
  )
}

export default CrewListItem