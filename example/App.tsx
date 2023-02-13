import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import { useCallbackState } from '../dist/index';
import './App.css'

function App() {

  const [isWait, setWait] = useState(false);
  const [count, setCount] = useCallbackState(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React useCallbackState</h1>
      <div className="card">
        <button
          disabled={isWait}
          onClick={() => {
            setWait(true);
            setCount((count) => count + 1, newCount => {
              setTimeout(() => {
                alert("3秒后调用回调结果:" + newCount);
                setWait(false);
              }, 3000);
            });
          }}
        >
          {isWait ? '等待3秒...' : `count is ${count}`}
        </button>
        <p>
          Edit <code>example/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
