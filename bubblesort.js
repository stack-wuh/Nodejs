// 冒泡排序
function bubbleSort(arr){
	var len = arr.length
	for(var j = 0; j< len -1 ;j ++){
		for(var i = 0; i < len - 1 - j; i++){
			if(arr[i] > arr[i+ 1]){
				var temp = arr[i+1]
				arr[i + 1] = arr[i]
				arr[i] = temp
			}
		}
	}
	return arr
}

//快速排序
function quickSort(arr, left, right) {
	var len = arr.length,
		partitionIndex,
		left = typeof left != 'number' ? 0 : left,
		right = typeof right != 'number' ? len - 1 : right;

	if (left < right) {
		partitionIndex = partition(arr, left, right);
		quickSort(arr, left, partitionIndex-1);
		quickSort(arr, partitionIndex+1, right);
	}
	return arr;
}

//插入排序
function insertionSort(arr) {
	var len = arr.length;
	var preIndex, current;
	for (var i = 1; i < len; i++) {
		preIndex = i - 1;
		current = arr[i];
		while(preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex+1] = arr[preIndex];
			preIndex--;
		}
		arr[preIndex+1] = current;
	}
	return arr;
}

//选择排序
function selectionSort(arr) {
	var len = arr.length;
	var minIndex, temp;
	for (var i = 0; i < len - 1; i++) {
		minIndex = i;
		for (var j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {     // 寻找最小的数
				minIndex = j;                 // 将最小数的索引保存
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}

var arr = [4,3,6,8,3,1]

var newArr = bubbleSort([3,'2','3',2,1,'1'])
// var quick = quickSort([3,13,5,2,8,5,10])
var insert = insertionSort(arr)
var select = selectionSort(arr)
console.log(newArr)
console.log(insert)
console.log(insert)