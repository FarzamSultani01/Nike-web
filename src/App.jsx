import { useState } from 'react'
import './App.css'

function App() {

  return (
  <main className="relative">
    <div className='bg-violet-200 h-10 w-full border-2 border-violet-600 rounded-b-md my-10 p-6 flex justify-center items-center text-[20px] '>
   <h1 className="text-center font-mono font-extrabold">Hello Afghanistan</h1>
   </div>
   <div className='flex flex-col items-center justify-center space-y-6 mt-2'>
    <div className='h-16 w-16 rounded-full bg-blue-500'> </div>
    <div className='h-16 w-16 rounded-full bg-red-500'> </div>
    <div className='h-16 w-16 rounded-full bg-green-500'> </div>
   </div>
  <div className='grid grid-cols-3 gap-2 mt-2 mx-2'>
    <div className='h-16  rounded-full bg-fuchsia-500'> </div>
    <div className='h-16  rounded-full bg-teal-500'> </div>
    <div className='h-16  rounded-full bg-amber-600'> </div>
   </div>
   <div className='sm:bg-amber-400 md:bg-green-400 lg:bg-blue-400 xl:bg-red-400 2xl:bg-purple-400 h-16 w-full rounded-md mt-2 flex items-center justify-center'>
    <p className='text-white'>I appear on s creen wider than 768px</p>
   </div>
   <div className='bg-white dark:bg-black text-black dark:text-white'>
    <p>!Dark Mode enable</p>
   </div>
    </main>
  )
}

export default App
