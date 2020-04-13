let arr = [
{
	age_name:'2017',
	student_info_class:[{
		class_name:'18',
		student_info_line:[{
			line_name:'ceshi',
			student_info:[{
				student_name:'aaa'
			}]
		}]
	}]
}
]
function getCildren(arr){
	if(typeof(arr) == 'object' && arr.length >0){
		for(var k in arr){
			console.log(k)
			console.log('/_{1}/g'.search(arr[k]))
			if('/_{1}/'.search(arr[k]) != -1){
				console.log('/_{1}/g'.search(arr[k]))
				 k = 'label'
			}
		}
		return  arr
	}else {
		return []
	}
}
getCildren(arr)

let result = getCildren(arr)
console.log(result)