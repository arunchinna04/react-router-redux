import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/app">Home</Link>
        {' '}
        <Link to="/app/foo">Foo</Link>
        {' '}
        <Link to="/app/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/app/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}
