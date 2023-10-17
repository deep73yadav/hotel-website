import React from 'react'

export const ShowData = ({name,email}) => {
  return (
    <div className='print'>
            <div className='heading'>{name}</div>
            <div className='heading'>{email}</div>
            <div className='heading'><button id='rm-btn'>Remove</button></div>
        </div>
  )
}
export default ShowData;