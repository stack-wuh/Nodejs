const GetObj = (obj,argus) => {
	let _arr = []
	if(typeof(obj) !== 'object') return
	if(typeof(argus) === 'string'){
		argus = argus.toString()
	}else {
		argus = [...argus]
	}
	if(typeof(argus) === 'string'){
		return obj[argus]
	}
	if(typeof(argus) === 'object'){
		argus.forEach(item => {
			_arr = [..._arr, obj[item]]
		})
		return _arr
	}
}

var obj = {
	name: 'shaow',
	age: 20
}
// let a = GetObj(obj, 'name')
// console.log(a)
// let b = GetObj(obj, ['name', 'age'])
// console.log(b)

let arr = [
	{
		name:'shadow',
		age:10,
		id:1,
	},
	{
		name:'shaodw',
		age:10,
		id:1
	},
	{
		name:'shaodw1',
		age:20,
		id:2
	},
]

let _arr = [], _arr1 = []
for(var k in arr){
	if(_arr1.includes(arr[k].id)){
		continue
	}else {
		_arr.push(arr[k])
		_arr1.push(arr[k].id)
	}
}

console.log(_arr)
