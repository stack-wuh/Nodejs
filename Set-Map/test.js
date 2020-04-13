var name = 'this is window'
var map = new Map([
	['asdasd', () => {console.log('index 0')}]
])

var action = map.get('asdasd')
action.call(this)

console.log(map)
console.log(action)

var actions = new Map([
	[1, ['index', '0']],
	[2, ['index', '1']],
	['default', ['default', 'default']]
])

var showIndex = (index) => {
	var action = actions.get(index) || actions.get('default')
	console.log(action)
}
showIndex(1)
showIndex()

var actions = new Map([
	['a_1', () => {console.log('a_1', name)}],
	['a_2', () => {console.log('a_2')}]
])
var showIndex = (a, b) => {
	var action = actions.get(`${a}_${b}`)
	action()
}
showIndex('a', 1)

var actions = new Map([
	[{index: 1, name: 'asd'}, () => {console.log('this is index: 1')}],
	[{index: 2, name: 'ass'}, () => {console.log('this is index: 2')}]
])
var showIndex = (i, n) => {
	var action = [...actions].filter(([key, val]) => (key.index == i && key.name == n))
	action.forEach(([key, val]) => {
		console.log(key, val)
		val.call(this)
	})
}
showIndex(1, 'asd')

var actions = () =>{
	const funcA = () => {console.log('this is func a')}
	const funcB = () => {console.log('this is func b')}
	return new Map([
		[{index: 0, type: 1}, funcA],
		[{index: 1, type: 2}, funcB]
	])
}
showIndex = (i, t) => {
	var action = [...actions()].filter(([key, val]) => (key.index == i && key.type == t))
	action.forEach(([key, val]) => {
		val.call(this)
	})
}
showIndex(0, 2)
