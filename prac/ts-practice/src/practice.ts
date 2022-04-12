let count = 0
count += 1
// count = '문자열'  // 문자열 넣으려고 하면 오류

const message: string = 'hello word'

const done: boolean = true

const numbers: number[] = [1, 2, 3]             // 숫자 배열
const messages: string[] = ['hello', 'world']   // 문자열 배열

// messages.push(1)  // 숫자 넣으려고 하면 오류

let mightBeUndefined: string | undefined = undefined  // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null              // number 일수도 있고 null 일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'  // red, orange, yellow 중 하나임
color = 'yellow'
// color = 'green' // 오류