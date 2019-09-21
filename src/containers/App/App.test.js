import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('containers/App', () => {
  test('renders correctly', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
