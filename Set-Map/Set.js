const s = new Set()

const arr = [1,1,3,4,2,2,3,4]

arr.map(item => s.add(item))

var formatarr = Array.from(s)
console.log(s, formatarr)

var keys =  s.keys()
for(var k of keys){
	console.log(k)
}

var values = s.values()
for(var k of values){
	console.log(k)
}

var entries = s.entries()
for(var k of entries){
	console.log(k)
}

var set = new Set(arr)
set.forEach((item,index) => console.log(index + ' : ' + item))

var obj = {
	name:'shadow',
	age:20,
	sex:'男',
	add:''
}

const notNull = params => {
	let set = new Set(), data = Object.keys(params)
	data.forEach(item => {
		if(!params[item][0]){
			set.add({item: params[item]})
		}
	})
	return set
}

let tem = notNull(obj)
console.log(tem, 'this is tem not null')

var map1 = new Map(obj)
console.log(map1, 'this is map1')