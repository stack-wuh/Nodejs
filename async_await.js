function timeout(ms){
	return new Promise(resolve => {
		 setTimeout(resolve, ms)
		return resolve({name: 'shadow' +
			'' +
			'' +
			''})
	})
}

async function asyncPrint(value, ms){
	await timeout(ms)
	let result = await timeout(ms)
	console.log(value, result)
}

asyncPrint('hello world', 1000)