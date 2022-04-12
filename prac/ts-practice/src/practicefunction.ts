function sum(x: number, y: number): number {
  return x+y
}

sum(1, 2)

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0)
}

const total = sumArray([1, 2, 3, 4, 5])

// 함수에서 아무것도 반환하지 않아야 한다면 반환 타입을 void로 설정한다