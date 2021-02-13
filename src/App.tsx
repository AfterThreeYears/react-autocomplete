import React, { useState } from 'react'
import AutoComplete from './AutoComplete';

const App = () => {
  const options = [
    {
      label: '浙江',
      value: '浙江'
    },
    {
      label: '江苏',
      value: '江苏'
    },
    {
      label: '湖南',
      value: '湖南'
    },
    {
      label: '上海',
      value: '上海'
    }
  ]
  const [value, setValue] = useState('');
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>value: {value}</p>
      <AutoComplete options={options} value={value} onChange={setValue} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
