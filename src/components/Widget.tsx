import React from 'react'
import { Popover } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import WidgetForm from './Form'
import { LanguageCode } from '../utils/translations'
import { usePopper } from 'react-popper'
import type { Feedback } from '../types'

export interface WidgetProps
  extends Pick<Feedback, 'userId' | 'projectId' | 'metadata'> {
  lang?: LanguageCode
  domain?: string
}

const Widget: React.FC<WidgetProps> = ({ children, ...props }) => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
  })
  return (
    <Popover>
      <Popover.Button
        as='div'
        ref={setReferenceElement}
        className='inline-block'
      >
        {children}
      </Popover.Button>
      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {({ close }) => (
          <div className='relative bg-white border border-gray-100 rounded-xl shadow-lg m-2 p-3 w-72'>
            <button
              onClick={() => close()}
              className='absolute right-1 top-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <XIcon className='h-5 w-5 text-gray-500' />
            </button>
            <WidgetForm {...props} />
          </div>
        )}
      </Popover.Panel>
    </Popover>
  )
}

export default Widget
