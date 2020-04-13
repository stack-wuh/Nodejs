var forEach = (list,callback) => {
	for(var i=0;i < list.length ;i++){
		callback(list[i],callback)
		console.log(list[i])
	}

}

var list = [
	[
		{
			name:'111'
		}
	],
	[
		{
			name:'222'
		}
	]
]

forEach(list,forEach)