import React from 'react'

const Heading = ({smallTXT ,smallTXT2,bigTXT ,classname}) => {
  return (
    <div className='text-center py-3'>
      {bigTXT && <h2 className='text-red fw-bold'>{bigTXT}</h2>}
        {
            smallTXT && <p className={`text-link mb-0 fw-bold fs-5 ${classname}`}>{smallTXT}</p>
        }
        {
            smallTXT2 && <p className={`text-link mb-0 fw-bold fw-small h6 ${classname}`}>{smallTXT2}</p>
        }
    </div>
  )
}

export default Heading