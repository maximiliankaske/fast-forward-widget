export type Feedback = {
  text: string
  projectId: string
  userId?: string
  userAgent: string
  location: string
  type: FeedbackType
  archived?: boolean
  screenshotURL?: string
  metadata?: Record<string, string | number>
}

export type FeedbackType = 'issue' | 'idea' | 'other'
