import * as React from 'react'
import './tailwind.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <h1 className='text-gray-500 font-medium text-4xl'>Fast Forward: {text}</h1>
  )
}
