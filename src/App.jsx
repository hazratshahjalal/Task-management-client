import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://vitejs.dev" target="_blank">

          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <Row className="mx-0">
          <Button as={Col} variant="primary">Button #1</Button>
          <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
          <Button as={Col} variant="success">Button #3</Button>
        </Row>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
