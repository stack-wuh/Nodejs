let arr = [1,2,3,1,2,3,1,2,3,1,1,1]
let count = 0
function counts(arr,el){
	if(Array.isArray(arr)){
		if(arr.indexOf(el) == -1){
			return
		}else{
			let a1 = arr.splice(0 , arr.lastIndexOf(el))
			counts(a1 , el)
			count++
		}
	}else{
		return
	}
}

counts(arr,1)
console.log(count , arr)