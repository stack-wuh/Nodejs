var name = 'window-name'
var obj = {
	name:'obj-name',
	a:function(){
		console.log(this.name)
	},
	b:{
		name:'b-name',
		a:function () {
			console.log(this.name)
		}
	},
}

obj.a()
obj.b.a()
var ax = obj.b.a
ax()
obj.a.call(obj.b)
function f1(){
	console.log(1)
}
function f2(){
	console.log(2)
}
f1.call(f2)

var obj1 = {
	num:20,
	fn:function(n){
		console.log(this.num + n)
	}
}
var obj2 = {
	num:25,
	fn:function(n){
		console.log(this.num + n)
	}
}

obj1.fn(10)
obj1.fn.call(obj2,10)