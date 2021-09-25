import React from 'react'
import Widget, { WidgetProps } from './components/Widget'
import './tailwind.css'

export const FFWidget: React.FC<WidgetProps> = ({ children, ...props }) => {
  return <Widget {...props}>{children}</Widget>
}
