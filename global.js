/*
* 常用工具函数
* */

/*
* 对象转数组
* */

const obj2Arr = (to, from) => {
	Object.keys(from).map(item => {
		to = [...to, {key: item, value: from[item]}]
	})
	return to
}
console.log(obj2Arr([], {name: 'aaa', age: 10}))