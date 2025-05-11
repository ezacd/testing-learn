import { useState } from 'react';

export default function Hello() {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  return (
    <div>
      <input
        type="text"
        id="search"
        onChange={(e) => value === 'hello' && setValue(e.target.value)}
      />
      <button id="toggle" onClick={toggle}>
        hello world
      </button>
      {visible && <h1 id="hello">hello world</h1>}
    </div>
  );
}
