import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '../i18n/LanguageContext.jsx'
import ChapterLayout from './ChapterLayout.jsx'
import introduction from '../content/chapters/01-introduction.js'

const renderChapter = () =>
  render(<LanguageProvider><ChapterLayout chapter={introduction} /></LanguageProvider>)

describe('ChapterLayout', () => {
  beforeEach(() => localStorage.clear())

  it('renders the English title, intro, and key takeaways', () => {
    renderChapter()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Reframing the Loan You Already Know/)
    expect(screen.getByText(/a familiar one run in reverse/)).toBeInTheDocument()
    expect(screen.getByText('Key Takeaways')).toBeInTheDocument()
  })

  it('renders an embedded diagram (svg) for the section that declares one', () => {
    const { container } = renderChapter()
    expect(container.querySelector('svg')).toBeTruthy()
  })
})
