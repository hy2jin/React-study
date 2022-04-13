import React from 'react';
import './App.css';
import Counter from './Counter';
import CounterReducer from './CounterReducer';
import Greetings from './Greetings';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`)
  }

  const onSubmit = (form: { name: string, description: string }) => {
    console.log('form: ', form);
  }

  return (
    <div className="App">
      <Greetings name='React' onClick={onClick} />
      <hr />
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit} />
      <hr />
      <CounterReducer />
      <hr />
      <ReducerSample />
    </div>
  );
}

export default App;
