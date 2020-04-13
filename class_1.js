class Point {
	constructor(x,y){
		this.x = x
		this.y = y
	}
	toString(){
		return '(' + this.x + ','  + this.y + ')'
	}
	name(){
		return 'my name ' + this.x
	}
}

var p = new Point(1,2)
// console.log(p.toString() , p.name())


let Foo =  class {
	constructor(){
		this.name = 'Lili'
	}
}
class Bar extends Foo{
	constructor(prop){
		super(prop)
	}
	toString(){
		console.log('is toString')
	}
}

let bar = new Bar('shadow')
bar.toString()
console.log(bar.name)