async function timeout(ms = 1000){
	await setTimeout(()=>{
		console.log('this is timeout')
	},ms)
}

// var result = timeout(2000).then(res => {
// 	console.log('this is resolve')
// })
// console.log(result)

async function f(){
	try{
		await Promise.reject(new Error('this is reject'))
	}catch(err){
		throw new Error('this is catc error')
	}
	// return await Promise.resolve('this is resolve')
}

f().then(ms => console.log(ms)).catch(err => console.log(err))
