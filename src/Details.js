import React from 'react'

const Details = (props) => {
  return (
    <div className='container'>
      <h1 className="display-1">Pet Details Page</h1>
      <pre>
        <code>{JSON.stringify(props, null, 4)}</code>
      </pre>
    </div>
  )
}

export default Details;

