import React from 'react'
import type { FeedbackType } from '../types'
import type { WidgetProps } from './Widget'
import { formattedMessages } from '../utils/translations'
import LoadingIcon from './Loading'
import { CheckIcon, XIcon } from '@heroicons/react/outline'

const WidgetForm = ({
  userId,
  projectId,
  lang: defaultLang,
  metadata,
  domain
}: WidgetProps) => {
  const [form, setForm] = React.useState<
    'idle' | 'pending' | 'error' | 'success'
  >('idle')
  const formRef = React.useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setForm('pending')
    const target = event.target as typeof event.target & {
      comment: { value: string }
      type: { value: FeedbackType }
    }
    try {
      // FIXME: fetch preflight status 204, post status 500
      await fetch(
        `${domain || 'https://fast-forward.vercel.app'}/api/feedback`,
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
            text: target.comment.value,
            type: target.type.value,
            projectId,
            userAgent: window.navigator.userAgent,
            location: window.document.location.href,
            metadata,
            userId
          })
        }
      )
      setForm('success')
    } catch (error) {
      setForm('error')
    }
  }

  const messages = formattedMessages(
    defaultLang || document.documentElement.lang || 'en'
  )

  const renderState = () => {
    switch (form) {
      case 'idle':
        return messages.submit.label
      case 'pending':
        return (
          <LoadingIcon className='h-4 w-4 my-1 animate-spin text-gray-500 mx-auto' />
        )
      case 'error':
        return <XIcon className='h-4 w-4 my-1 mx-auto text-red-500' />
      case 'success':
        return <CheckIcon className='h-4 w-4 my-1 mx-auto text-green-500' />
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className='space-y-3'>
      <div className='flex flex-wrap space-x-3'>
        <div>
          <input
            type='radio'
            name='type'
            id='issue'
            value='issue'
            className='text-gray-900 mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            defaultChecked
          />
          <label htmlFor='issue' className='text-gray-700 text-sm font-medium'>
            {messages.type.options.issue.label}
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='type'
            id='idea'
            value='idea'
            className='text-gray-900 mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
          <label htmlFor='idea' className='text-gray-700 text-sm font-medium'>
            {messages.type.options.idea.label}
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='other'
            id='other'
            value='other'
            className='text-gray-900 mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
          <label htmlFor='other' className='text-gray-700 text-sm font-medium'>
            {messages.type.options.other.label}
          </label>
        </div>
      </div>
      <label htmlFor='comment' className='sr-only'>
        Comment
      </label>
      <textarea
        name='comment'
        rows={3}
        className='resize-none text-sm px-2 py-1 shadow-sm focus:ring-indigo-500 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md text-gray-900'
        required
      />
      <button
        type='submit'
        className='px-2 py-1 w-full shadow-sm rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white bg-gray-800 hover:bg-gray-900'
      >
        {renderState()}
      </button>
    </form>
  )
}

export default WidgetForm
