
// javascript中的继承
function cat(name,color){
	this.name = name
	this.color = color
}

function animal(){
	this.desc = '动物'
}

// 构造函数绑定
// 利用call或者是apply方法,将父对象的构造函数绑定在子对象上面去
function Cat1(name,color){
	animal.apply(this,arguments)
	this.name = name
	this.color = color
}
var cat1 = new Cat1('aaa','yellow')
console.log(cat1)

// prototype
cat.prototype = new animal()
cat.prototype.constructor = cat
var cat2 = new cat('sss','blue')
console.log(cat2.desc)

//prototype 直接继承
animal.prototype.desc = 'dongwu'
cat.prototype = animal.prototype
cat.prototype.constructor = cat
var cat3 = new cat('aasd','asda')
console.log(cat3)


//非构造函数的继承
var Chinese = {
	nation:'中国人'
}
var Doctor = {
	carerr:'医生'
}

console.log('------------')
// object() 方法继承
function object(o){
	function F(){}
	F.prototype = o
	return new F()
}
var Doctor = object(Chinese)
Doctor.carerr = '医生'
console.log(Doctor.nation)

// 非构造函数类继承 -- 浅拷贝
/**
 * 浅拷贝的实现实质上是把对象的内存属性全部拷贝到另一个对象上
 *  两者之间还是会互相影响
 * */
function extendCopy(p){
	var c = {}
	for(var i in p){
		c[i] = p[i]
	}
	c.uber = p
	return c
}

var Doctor = extendCopy(Chinese)
Doctor.carerr  = '老师'
console.log(Doctor.carerr)

Chinese.birthPlace = ['湖北','武汉']
var Doctor = extendCopy(Chinese)
console.log(Doctor.birthPlace)
Doctor.birthPlace.push('四川')
console.log(Doctor.birthPlace)
console.log(Chinese.birthPlace)

//深拷贝
/**
 * 深拷贝就是能够实现真正意义上的数组和对象的拷贝,而不是内存地址
 * */
function deepCopy(p,c){
	var c = c || {}
	for(var i in p){
		if(typeof p[i] === 'object'){
			c[i] = (p[i].constructor === Array) ? [] : {}
			deepCopy(p[i],c[i])
		}else{
			c[i] = p[i]
		}
	}
	return c
}

var Doctor = new deepCopy(Chinese)
Doctor.birthPlace.push('asdasd')
console.log(Doctor.birthPlace)
console.log(Chinese.birthPlace)