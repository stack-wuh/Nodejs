function compose (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

var add = (a, b) => a + b
var log = (a) => { console.log(a) }


function randomString () {
  Math.random()
      .toString(36)
      .substring(7)
      .split('')
      .join('.')
}

randomString()