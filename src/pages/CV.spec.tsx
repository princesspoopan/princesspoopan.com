import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import CV from './CV.react'

describe('<CV />', () => {
  it('renders .cv', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <CV />
      </MemoryRouter>
    )
    expect(document.querySelector('.cv')).not.toBeNull()
  })

  it('renders the name header', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <CV />
      </MemoryRouter>
    )
    expect(screen.getByText('Krongkarn Jitsil')).toBeDefined()
  })
})
