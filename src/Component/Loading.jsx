import React from 'react'
import { Puff } from 'react-loader-spinner'

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Puff
        height={80}
        width={80}
        color="#00BFFF"
        ariaLabel="loading"
      />
    </div>
  )
}

export default Loading