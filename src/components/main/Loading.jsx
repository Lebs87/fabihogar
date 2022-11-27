import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";

const Loading = () => {
  return (
    <div className='position-relative div_loading'>
        <div className='position-absolute top-50 start-50 translate-middle'>
          <SyncLoader color="blueviolet" />
        </div>
    </div>
  )
}

export default Loading