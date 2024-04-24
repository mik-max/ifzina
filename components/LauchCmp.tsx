import React from 'react'

const LauchCmp = () => {
     return (
          <div className='h-screen bg-launch-bg bg-cover bg-center rounded-3xl md:mx-[25px] mx-[15px] mb-[25px] py-[50px] md:px-[100px] px-[20px]'>
               <div className='relative top-[40vh]'>
                    <h1 className='text-white md:text-5xl text-2xl font-bold tracking-tighter mb-[5px]'>Get started,</h1>
                    <h1 className='text-white md:text-5xl text-2xl font-bold tracking-tighter'>Bring your vision to life</h1>
                    <form autoComplete='off'>
                         <div className='flex mt-8 items-center bg-white rounded-[100px] md:h-[72px] h-[56px] md:w-[fit-content] w-[100%] text-black md:text-[18px] text-[16px] pr-[7px]'>
                              <input type='email' required className='md:text-[18px] text-[#56616B] text-[16px] pl-[20px] rounded-[100px] bg-white focus:outline-none md:w-[350px]  tracking-tight ' placeholder='email address' />
                              <div className='md:block hidden'>
                                   <button className='flex justify-center items-center bg-black-300 h-[56px] my-[7px] tracking-tight text-white cursor-pointer px-5  rounded-[100px]'>Get started</button>
                              </div>
                         </div>
                         <div className='md:hidden mt-5 block w-[100%] '>
                              <button className='flex justify-center items-center w-[100%] bg-black-300 h-[56px] my-[7px] tracking-tighter text-white cursor-pointer px-5 text-[14px]  rounded-[100px] uppercase'>Get started</button>
                         </div>
                    </form>
               </div>

               

          </div>
     )
}

export default LauchCmp