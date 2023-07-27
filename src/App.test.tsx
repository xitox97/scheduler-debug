import { cleanup, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'
import { server } from '../mocks/server'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
  jest.restoreAllMocks()
})

afterEach(() => {
  cleanup()
})

test('Show App Component', async () => {
  server.use()
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(await screen.findByText('Calendar')).toBeInTheDocument()
})

it('should be rendered with 3 records', async () => {
  server.use()
  const { findAllByRole, findByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  screen.debug()
  expect(await findByText('Calendar')).toBeInTheDocument()

  //This fail
  // expect(await findByText('Hello world 1')).toBeInTheDocument()

  //This also fail
  const gridCells = await findAllByRole('appointment')
  expect(gridCells.length).toBe(3)
})
