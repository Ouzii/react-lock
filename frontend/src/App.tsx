import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const BASE_URL = 'http://localhost:3001'
const App = () => {

  const [lockOpen, setLockOpen] = useState(false)
  const [currCode, setCurrCode] = useState('')

  const checkCode = async () => {
    try {
      const correct = await (await axios.post(BASE_URL, { code: currCode })).data
      setCurrCode('')
      if (correct) setLockOpen(true)
    } catch (e) {
      setCurrCode('')
    }
  }

  useEffect(() => {
    if (currCode.length >= 4) checkCode()
    //eslint-disable-next-line
  }, [currCode])

  const handleButtonClick = (val: number | boolean): void => {
    if (typeof val === 'boolean') return

    if (val === -1) setCurrCode('')
    else setCurrCode(currCode + val)
  }

  const renderContent = (): JSX.Element => {
    const buttons = [
      {
        label: '1',
        value: 1
      },
      {
        label: '2',
        value: 2
      },
      {
        label: '3',
        value: 3
      },
      {
        label: '4',
        value: 4
      },
      {
        label: '5',
        value: 5
      },
      {
        label: '6',
        value: 6
      },
      {
        label: '7',
        value: 7
      },
      {
        label: '8',
        value: 8
      },
      {
        label: '9',
        value: 9
      },
      {
        label: 'C',
        value: -1
      },
      {
        label: '0',
        value: 0
      },
      {
        label: 'lock',
        value: lockOpen
      },
    ]
    return (
      <div>
        <div style={{ lineHeight: '2em', height: '2em', border: '2px darkblue solid', borderRadius: 4 }}>{currCode}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '4em 4em 4em', gridTemplateRows: '4em 4em 4em 4em' }}>
          {buttons.map((button, i) => {
            if (button.label === 'lock') return <div key={i} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', fontWeight: 'bold', color: button.value ? 'green' : 'red' }}>{button.value ? 'OPEN' : 'LOCKED'}</div>
            return <button key={i} onClick={() => handleButtonClick(button.value)}
              style={{ border: '2px darkblue solid', borderRadius: 4, cursor: 'pointer', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              {button.label}
            </button>
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="App" style={{ height: window.innerHeight, width: window.innerWidth }}>
      {renderContent()}
    </div>
  );
}

export default App;
