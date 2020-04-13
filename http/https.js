const https = require('https')

https.get('https://localhost:9010', (req, res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(`headers: ${res.headers}`)

  res.on('data', d => {
    console.log(d)
  })
}).on('error', e => {
  console.error(e)
})
