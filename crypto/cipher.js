const crypto = require('crypto')
const cipher = crypto.createCipher('aes192', 'a password')

let encrypted = ''
cipher.on('readable', res => {
	const data = cipher.read()
	if(data){
		encrypted += data.toString('hex')
	}
})
cipher.on('end', res => {
	console.log(encrypted)
})

cipher.write('some clear text data')
cipher.end()