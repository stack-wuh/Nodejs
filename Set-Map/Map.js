
/**
 *  传统的js Object对象只能使用字符串做键
 *  Map 对象解决了任意类型的键名
 */
const m = new Map()
const o = {p: 'Hello World'}

m.set(o, 'content')
var val = m.get(o)
console.log(m.has(o))
console.log(m.delete(o))
console.log(m.has(o))

var obj1 = {name: 'aaa'}
const map = new Map([
	['name', 'shadow'],
	['title', "author"],
	[obj1, 'is ook']
])

console.log(map.size)
console.log(map.has('name'))
console.log(map.get('name'))
console.log(map.has(obj1))
console.log(map.get(obj1))

var obj2 = {
	name:'shadow',
	age:20,
	sex:'男',
	add:''
}

const notNull = params => {
	let map = new Map(), data = Object.keys(params)
	data.forEach(item => {
		if(params[item].toString()[0]){
			map.set(item, params[item])
		}
	})
	return map
}

var tem = notNull(obj2)
console.log(tem, 'this is tem obj')