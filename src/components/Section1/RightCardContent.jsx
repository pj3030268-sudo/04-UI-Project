import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
           <h2 className='bg-white h-9 w-9 text-xl rounded-full flex justify-center items-center font-semibold '>{props.id+1}</h2>
           <div>
               <p className='text-shadow-2xs text-white text-lg leading-normal mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illo saepe placeat itaque sed dignissimos amet consectetur  elit.</p>
               <div className='flex justify-between '>
                  <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                  <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
               </div>
           </div>
        </div>
  )
}

export default RightCardContent 
 
