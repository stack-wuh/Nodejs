const fs = require('fs')

const readFile = () => {
  fs.readFile('/output.txt', (err, file) => {
    console.log('file is loading success!')
  })
}
console.log('发起读取文件')

const log = (err, file) => {
  if(err) throw err
  const buffer = Buffer.from(file)
  console.log(err, buffer.toString())
}

async function readFileAsync(){
  const file1 = await fs.readFile('./output.txt', log)
  const file2 = await fs.readFile('./output1.txt', log)
}

function appendFile(){
  const data = `这里是我要添加进文件的消息内容\n 这里添加一条换行符`
  fs.appendFile('./output1.txt', data, err => {
    if(err) throw err
    console.log('data append file success')
  })
}

appendFile()

readFile()
readFileAsync()
