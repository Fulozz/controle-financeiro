import React from 'react'

const Heading = ({title}) => {
  return (
    <div>
        <h2 className='text-2xl font-bold text-emerald-700 dark:text-slate-50'>{title}</h2>
    </div>
  )
}

export default Heading