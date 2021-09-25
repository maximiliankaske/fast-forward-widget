import React from 'react'

import { FFWidget } from 'fast-forward-widget'
import 'fast-forward-widget/dist/index.css'

const App = () => {
  return (
    <div className='mx-auto max-w-xl'>
      <div className='p-6 space-y-6'>
        <h1 className='text-indigo-500 font-medium text-4xl'>Test App</h1>
        <div>
          <FFWidget
            projectId='VWJU7eJdIEYGmoyKW4rp'
            domain='https://fast-forward-p0f7wt0qd-mxkaske.vercel.app'
          >
            <button className='rounded-full text-white bg-black font-medium leading-6 py-2 px-4'>
              Give use Feedback!
            </button>
          </FFWidget>
        </div>
      </div>
    </div>
  )
}

export default App
