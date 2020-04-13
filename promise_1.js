new Promise((resolve,reject)=>{
	return new Promise(resolve(false))
}).then(resolve=>{
	console.log(resolve)

}).then(err=>{
	console.log(err)
}).catch(err=>{
	console.log(err)
})