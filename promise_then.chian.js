let obj = {
	name:'shadow',
	age:'20',
	add:'湖北省武汉市'
}
let params = {
	sex:'男'
}
const getObj = obj => {
	return new Promise((resolve, reject) => {
		return resolve(obj)
	})
}

const LogData = ({params, obj} = {}) => {
	console.log(params, obj, 'this is log data')
}
getObj({obj,params}).then(LogData).then((res,pra) => {
	console.log(res, pra, 'this is finaliy')
})


