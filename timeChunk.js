//节流函数
function timeChunk(data,fn,count=1,wait){
	let obj , timer;
	function start(){
		let len = Math.min(count,data.length);
		console.log(len,data.length)
		for(var i =0 ;i<len; i++){
		  var	value = data.shift()
			fn(value)
		}
	}
	return function(){
		timer = setInterval(function(){
			if(data.length == 0){
				return clearTimeout(timer)
			}
			start()
		},wait)
	}
}

let arr = []
for(let i =0 ;i<1012;i++){
	arr.push(i)
}

let render = timeChunk(arr,function(n){
	console.log(n)
},10,500)

render()
