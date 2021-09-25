import React from 'react'
import Widget from './components/Widget'
import './tailwind.css'

export const FFWidget: React.FC = ({ children }) => {
  return (
    <Widget
      projectId=''
      domain='https://fast-forward-p0f7wt0qd-mxkaske.vercel.app'
    >
      {children}
    </Widget>
  )
}
