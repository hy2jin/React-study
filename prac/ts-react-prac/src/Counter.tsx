import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  const onIncrease = () => setCount(count + 1)
  const onDecrease = () => setCount(count - 1)

  // 상태가 null 일수도 있고 아닐수도 있을때는 useState에서 Generics를 사용한다
  interface Information { name: string, description: string }
  const [info, setInformation] = useState<Information | null>(null)

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;