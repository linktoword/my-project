/*
 * @Description: app入口文件
 * @Author: zsf
 * @Date: 2020-07-09 18:11:19
 */ 
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You click ${count} times`
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default App;