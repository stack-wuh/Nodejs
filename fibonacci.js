function fibinacci(num) {
  if(num < 2) return 1
  return fibinacci(num - 1) + fibinacci(num - 2)
}
const start = new Date()
let result = fibinacci(20)
const end = new Date() - start
console.log(`运算结果为: ${result}, 共耗时: ${end}ms`)
