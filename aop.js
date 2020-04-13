/**
 * [description]
 * AOP(面向切面变成)的主要作用是把一些跟核心业务无关的功能抽离出来
 * 之后动态的编入业务逻辑中
 * @method
 * @param  {[type]} beforefn [description]
 * @return {[type]}          [description]
 */

Function.prototype.before = function(beforefn){
  var _this = this
  return function(){
    beforefn.apply(this, arguments)
    return _this.apply(this, arguments)
  }
}

Function.prototype.after = function(afterfn){
  var _this = this
  return function(){
    var ret = _this.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}

var func = function(){
  console.log(2)
}

func = func.before(function(){
  console.log(1)
}).after(function(){
  console.log(3)
})

func()
