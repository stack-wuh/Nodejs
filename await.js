async function timeout(ms){
return new Promise((resolve)=>{
	setTimeout(resolve,ms)
})
}

async function asyncPrint(value,ms){
	await timeout(ms)
	console.log(value)
}

console.log('hello world' , 'sync')
// asyncPrint('hello world' , 1000)

async function f(){
	return 'hello world'
}
f().then(v => console.log(v,'this is thrid'))

async function f1(){
	throw new Error('this  is error')
}
f1().then(v => console.log(v))

async function f2(){
	await Promise.reject('出错啦')
				.catch(e => console.log(e))
	return	await Promise.resolve('this is four for f2')
}
f2().then(v => console.log(v))

