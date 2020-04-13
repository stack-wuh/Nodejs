/**
 * 数组元素的上下移动
 */


const moveItem = (arr,fromIndex,toIndex) => {
	arr[toIndex] = arr.splice(fromIndex,1,arr[toIndex])[0]
}

const moveUpItem = (arr,index) => {
	if(index == 0){
		return
	}
	moveItem(arr,index,index-1)
}

const movedown = (arr,index) => {
	if(index == arr.length - 1){
		return
	}
	moveItem(arr,index,index+1)
}

var arr = [1,2,3,4,5,6,7]
moveUpItem(arr,2, 1)
console.log(arr)
