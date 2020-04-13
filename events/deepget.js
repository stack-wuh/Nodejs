const deepGet = (obj, keys) => keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj)

var data = {
  foo: {
    foz: [1, 2, , 3],
    bar: {
      baz: ['a', 'b', 'c']
    }
  }
}

let result = deepGet(data, ['foo', 'foz', 3])
console.log(result)
console.log('==========================')

const dig = (obj, target) => {
 return target in obj ?
    obj[target] :
    Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return dig(val, target);
    }, undefined)
}
var data = {
  'lv1': {
    'lv2': {
      'lv3': 'this is lv3'
    }
  }
}
var res = dig(data, 'lv3')
console.log(res)
console.log('==========================')

const findKey = (obj, fn) => Object.keys(obj).find(kk => fn(obj[kk], kk, obj))

var res = findKey({
  a: 'as',
  b: 'bb',
  c: 'cc'
}, x => Boolean(x))

console.log(res)
console.log('==========================')

const get = (from, ...selector) => [...selector].map(s => 
      s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((acc, val) => acc && acc[val], from))

var obj = {
  selector: {
    to: {
      val: 'val to select'
    }
  },
  target: [1, 2, { a: 'test' }]
}

var res = get(obj, `selector.to.val`, 'target[1]', 'target[2].a')
console.log(res) // Array(3) ['val to select', 2, 'test']
console.log('==================')

const merge = (...objs) => [...objs].reduce((acc, obj) => Object.keys(obj).reduce((a, k) => {
  acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k]
  return acc
}, {}), {})

var obj1 = {
  a: [{x: 1}, {x: 2}],
  b: 1,
  c: 'f00'
}
var obj2 = {
  c: {x: 1},
  a: [{x: 1}, {x: 2}],
  b: 3
}
var res = merge(obj1, obj2)
console.log(res, res.a, res.b, res.c)