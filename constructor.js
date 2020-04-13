class Foo{
	constructor(...args) {
		this.args = args
		console.log(this, ', this is foo')
	}
}

class Bar extends Foo{
	constructor(){
		super()
		this.name = 'wuhong'
		console.log(this, ', this is bar')
	}
	log(){
		console.log(this, 'this is bar, this is log func')
	}
}

let fo = new Foo()
let test = new Bar()
test.log()

class Animal{
	constructor(name){
		this.name = name || 'marks'
	}
	speak(){
		console.log(this.name + ' ,this is family')
	}
}

class Dog extends Animal{
	// constructor(){
	// 	super()
	// }
	speak(){
		console.log(this.name + ' ,this is dogs')
	}
}

var d = new Dog()
// d.speak()