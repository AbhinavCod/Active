import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='flex flex-col min-h-screen bg-gray-800'>
          <div className='flex flex-col w-full my-auto items-center'>
            <div className='flex flex-col w-[40%] py-10 bg-gray-700 border-2 border-gray-700 rounded-lg'>
                <h1 className='text-green-600 font-bold pb-2'>ADVICE #117</h1>

                <h1 className='font-bold text-3xl text-white'>"It is easy to sit up and take</h1>
                <h1 className='font-bold text-3xl text-white'>notice, what's difficult is getting</h1>
                <h1 className='font-bold text-3xl text-white'>up and taking action </h1>
                
            </div>

            <div>
              <img src="" alt="" />
            </div>

            
            
        </div>
     </div>
      
    </>
  )
}

export default App
