import React from 'react'
import { FFWidget } from 'fast-forward-widget'
import 'fast-forward-widget/dist/index.css'

const App = () => {
  return (
    <>
      <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
        Test App
      </h1>
      <div>
        <FFWidget
          projectId='VWJU7eJdIEYGmoyKW4rp'
          domain='https://fast-forward-p0f7wt0qd-mxkaske.vercel.app'
        >
          <button
            style={{
              color: 'white',
              backgroundColor: 'black',
              paddingRight: 16,
              paddingLeft: 16,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 9999
            }}
          >
            Give use Feedback!
          </button>
        </FFWidget>
      </div>
    </>
  )
}

export default App
