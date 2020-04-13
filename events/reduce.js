const obj = {
	real_name: 'shadow',
	age: 20,
	sex: 1,
	start_date: new Date().toLocaleDateString(),
	other: null
}

function reduce() {
	const output = {}
	let transfer = {
		_name: ['name', 'real_name'],
		_age: ['age', 'years'],
		_sex: ['sex', 'gander'],
		_start_date: ['startDate', 'start_date'],
		_other: ['other']
	}
	let entries = Object.entries(transfer)
	entries.forEach(([key, val], _) => {
		console.log(key, val, _)
		for(var i = 0, length = val.length; i < length; i ++) {
			if(obj[val[i]] != undefined || obj[val[i]] != null) {
				output[key] = obj[val[i]]
				break;
			}
		}
	})
	return output
}
let output = reduce()
console.log(output)