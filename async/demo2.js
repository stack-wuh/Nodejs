async const getStockName = name => {
	const symbol = await getStockSymbol(name)
	const price = await getPrice(symbol)
	return price
}

getStockName('good').then(res => {
	console.log(res)
})