const arr1 = [1,2,3,4,1,2,3,4]
const reducer = (prev ,next) => prev + next

/**
 * 计算数组中每个元素出现的次数
 * @param prev
 * @param next
 */
const counts = (prev ,next) => (prev[next] ++ || (prev[next] = 1) ,prev)
let info = arr1.reduce( counts ,{})

console.log(arr1.reduce(reducer , 5))
console.log(info)

/**
 * 二维数组展开成为一维数组
 */
const flattened = [[0,1] ,[1,2] ,[2,3]].reduce( (a ,b )=> a.concat(b),[])
console.log(flattened)

function reduce2(all ,el){
	if(el in all){
		all[el] ++
	}else{
		all[el] = 1
	}
	return all
}
var info1 = arr1.reduce(reduce2, {})
console.log(info1)

console.warn('--------------')

var friends = [{
	name: 'Anna',
	books: ['Bible', 'Harry Potter', 'Javascript'],
	age: 21
}, {
	name: 'Bob',
	books: ['War and peace', 'Romeo and Juliet'],
	age: 26
}, {
	name: 'Alice',
	books: ['The Lord of the Rings', 'The Shining'],
	age: 18
}];
/***
 * 获取数组中所有的books
 * @type {*|*[]}
 */
var allbooks = friends.reduce((prev,curr) => [...prev, ...curr.books] ,['Javascript'])
console.log(new Set([...allbooks]))

/**
 *  数组去重的又一种方法
 */
var arr = [1,2,3,4,1,2,3,4]
var result = arr.sort((a,b) => a-b).reduce((init, current)=>{
	if(init.length === 0 || init[init.length-1] !== current){
		init.push(current)
	}
	return init
}, [])
 console.log(result)

var obj = {
	name:'shadow',
	info:{
		name:'shaodo1',
		list:{
			name:'shaod22',
		}
	}
}
var arr2 = [obj]
var resuilt = arr2.map(item => item.info).map(list => list.list)
console.log(arr2 ,resuilt)