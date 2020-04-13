const {URLSearchParams} = require('url')

let params

/**
 * 参数为字符串
 */
params = new URLSearchParams('username=wuhong&password=123')
console.log(params , params.get('username'))
params = new URLSearchParams('?username=wuhong&password=123')
console.log(params.toString())

/**
 * 参数为对象
 */
params = new URLSearchParams({
	name:'shadow',
	pwd:'123'
})
console.log(params.toString())

/**
 * 参数可以是一个generator函数
 * @returns {IterableIterator<string[]>}
 */
function* getQueries(){
	yield ['user' , 'abc']
	yield ['query' , 'frist']
	yield ['query' , 'second']
}
params = new URLSearchParams(getQueries())
console.log(params.toString())

/**
 * append在参数后添加一个新得键值对
 */
params.append('aaa','123')
console.log(params)

/**
 * delete 删除键名为name的键值对
 */
params.delete('aaa')
console.log(params)

/**
 * entries 返回数组
 */
let map = params.entries()
console.log(map)

/**
 * set 设置url
 */
params.set('bbb','222')
console.log(params.get('bbb'))
