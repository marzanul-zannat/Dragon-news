import React from 'react'
import Marquee from 'react-fast-marquee'

const LatestNews = () => {
  return (
    <div className='flex items-center gap-5 bg-base-200 p-3'>
<p className='text-base-100 bg-secondary px-3 py-2'>Latesr</p>
<Marquee className='flex gap-8' pauseOnHover={true} speed={40}>
<p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus facilis earunima </p> 

<p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus facilis earunima </p> 

<p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus facilis earunima </p> 
</Marquee>


    </div>
  )
}

export default LatestNews