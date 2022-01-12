# 1. JSX란?

- 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생겼다
- 이런 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링 되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다

```jsx
function App() {
  return (
    <div>
      Hello <b>react</b>
    <div/>
  );
}
```

이렇게 작성된 코드는 다음과 같이 변환된다

```jsx
function App() {
	return React.createElement("div", null, "Hello", React.createElement("b", null, "react"));
}
```



# 2. JSX 문법

1. 감싸인 요소

   - 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다

   ```jsx
   // import { Fragment } from 'react';
   
   function App() {
     const name = '리액트';
     return (
       <>
         <h1>{name} 안녕!</h1>
         <h2>잘 작동하니??</h2>
       </>
     );
   }
   ```

2. If 문 대신 조건부 연산자

   - JSX 내부의 자바스크립트 표현식에서 if문을 사용할 수 없다
   - 조건에 따라 다른 내용을 렌더링 해야 할 때는 JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나, `{ }` 안에 조건부 연산자를 사용하면된다
   - 조건부 연산자 == 삼항 연산자

   ```jsx
   function App() {
     const name = '리액트';
     return (
       <div>
         {name === '리액트' ? (
           <h1>리액트입니다.</h1>
         ) : (
           <h2>리액트가 아닙니다.</h2>
         )}
       </div>
     );
   }
   ```

3. AND 연산자(&&)를 사용한 조건부 렌더링

   - 특정 조건을 만족할 때 내용을 보여주고, 만족하지 않을 때 아예 아무것도 렌더링 하지 않아야 하는 상황에서 조건부 연산자를 통해 구현할 수 있다

   ```jsx
   function App() {
     const name = '뤼액트';
     return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;
   }
   ```

   ```jsx
   function App() {
     const name = '뤼액트';
     return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
   }
   ```

   - 리액트에서 `false`를 렌더링할 때는 `null`과 마찬가지로 아무것도 나타나지 않는다
   - `0`은 화면에 나타난다

4. Undefined를 렌더링하지 않기

   - 리액트 컴포넌트에서는 함수에서 `undefined` 만 반환하여 렌더링하면 안된다
   - 어떤 값이 undefined일 수도 있다면, OR(`||`) 연산자를 사용해서 해당 값이 undefined일 때 사용할 값을 지정해서 오류를 피한다

   ```jsx
   import './App.css';
   
   function App() {
     const name = undefined;
     return name || '값이 undefined입니다.';
   }
   ```

   - 반면, JSX 내부에서 undefined를 렌더링하는 것은 괜찮다

   ```jsx
   import './App.css';
   
   function App() {
     const name = undefined;
     return <div>{name}</div>;
   }
   ```

   - name 값이 undefined 일 때 보여주고 싶은 문구가 있다면 다음과 같이 코드를 작성한다

   ```jsx
   import './App.css';
   
   function App() {
     const name = undefined;
   	return <div>{name || 'undefined 일 때 보여줄 값'}</div>;
   }
   ```

5. 인라인 스타일링

   - 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어야 한다
   - 스타일 이름 중 `-` 이 들어가는 것은 `-` 를 없애고 `카멜 표기법` 으로 작성한다

   ```jsx
   import './App.css';
   
   function App() {
     const name = '리액트'
     const style = {
       backgroundColor: 'black',   // background-color -> backgroundColor
       color: 'aqua',
       fontSize: '480px',          // font-size -> fontSize
       fontWeight: 'bold',         // font-weight -> fontWeight
       padding: 16                 // 단위를 생략하면 px로 지정된다
     };
     return <div style={style}>{name}</div>
   }
   
   export default App;
   ```

   - style 객체를 미리 선언하지 않고 바로 style값을 지정하고 싶으면 다음과 같이 작성한다

   ```jsx
   import './App.css';
   
   function App() {
     const name = '리액트'
     return (
       <div
         style={{
           backgroundColor: 'black',   // background-color -> backgroundColor
           color: 'aqua',
           fontSize: '480px',          // font-size -> fontSize
           fontWeight: 'bold',         // font-weight -> fontWeight
           padding: 16                 // 단위를 생략하면 px로 지정된다
         }}
       >{name}</div>
     )
   }
   
   export default App;
   ```

6. className

   - 일반 HTML에서 CSS 클래스를 사용할 때는 `<div class="myclass"></div>` 와 같이 class 속성을 설정한다
   - 하지만 JSX에서는 class가 아닌 `className` 으로 설정해야 한다

   ```css
   /* App.css */
   
   .react {
     background: aqua;
     color: black;
     font-size: 480px;
     font-weight: bold;
     padding: 16px;
   }
   ```

   ```jsx
   import './App.css';
   
   function App() {
     const name = '리액트'
     return (
       <div className='react'>{name}</div>
     )
   }
   
   export default App;
   ```

7. 주석

   - JSX 내부에서 주석을 작성할 때는 `{/* ... */}` 와 같은 형식으로 작성한다
   - 그리고 시작 태그를 여러 줄로 작성할 때는 그 내부에서 `//` 과 같은 형식으로 주석을 작성할 수 있다

   ```jsx
   import './App.css';
   
   function App() {
     const name = '리액트'
     return (
       <>
         {/* 보통은 이렇게 작성 */}
         <div 
           className='react'   // 시작태그가 여러줄인 경우 이렇게 작성
         >
           {name}
         </div>
         <input></input>
       </>
     )
   }
   
   export default App;
   ```