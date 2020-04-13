/**
 *  实现 add(1)(2,3)(4)() = 10的效果
 */
 function currying(fn){
 	var allArgs = []
	return function next(){
 		var args = [].slice.call(arguments)
		if(args.length > 0){
 			allArgs = allArgs.concat(args)
			return next
		}else{
 			return fn.apply(null, allArgs)
		}
	}
}
var add = currying(function(){
	var sum = 0
	for(var i = 0; i< arguments.length; i++){
		sum += arguments[i]
	}
	return sum
})
console.log(add(2)(1)(1,2,3)())


/*
	反柯里化
 */
function Toast(option){
	this.prompt = ''
}
Toast.prototype = {
	constructor: Toast,
	show: function(){
		console.log(this.prompt)
	}
}

var obj = {
	prompt:'new object'
}
var obj1 = {
	prompt: 'other object'
}
function unCurrying(fn){
	return function(){
		var args = [].slice.call(arguments)
		var that = args.shift()
		console.log(that)
		return fn.apply(that, args)
	}
}

var objShow = unCurrying(Toast.prototype.show)

objShow(obj, obj1)

/**
 *函数重载
 */
function addMethod(object, name, f)
{
	var old = object[name];
	object[name] = function()
	{
		// f.length为函数定义时的参数个数
		// arguments.length为函数调用时的参数个数　　　　
		if (f.length === arguments.length)
		{
			return f.apply(this, arguments);
		}
		else if (typeof old === "function")
		{
			return old.apply(this, arguments);
		}
	};
}


// 不传参数时，返回所有name
function find0()
{
	return this.names;
}


// 传一个参数时，返回firstName匹配的name
function find1(firstName)
{
	var result = [];
	for (var i = 0; i < this.names.length; i++)
	{
		if (this.names[i].indexOf(firstName) === 0)
		{
			result.push(this.names[i]);
		}
	}
	return result;
}


// 传两个参数时，返回firstName和lastName都匹配的name
function find2(firstName, lastName)
{
	var result = [];
	for (var i = 0; i < this.names.length; i++)
	{
		if (this.names[i] === (firstName + " " + lastName))
		{
			result.push(this.names[i]);
		}
	}
	return result;
}


var people = {
	names: ["Dean Edwards", "Alex Russell", "Dean Tom"]
};


addMethod(people, "find", find0);
addMethod(people, "find", find1);
addMethod(people, "find", find2);

console.log(people.find())
console.log(people.find('Dean'))
console.log(people.find('Dean', 'Edwards'))