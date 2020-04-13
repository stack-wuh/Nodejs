//防抖
function debounce(fn,delay){
	var timer ;
	return function(e){
		console.log('clear',timer,e)
		clearTimeout()
		var context = this , args = arguments
		console.log('新的',timer,e)
		timer = setTimeout(function(){
			console.log('----')
			fn.apply(context,args)
		},delay)
	}
}