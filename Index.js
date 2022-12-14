const fs = require('fs')
const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await new Promise((r)=>{
			fs.writeFile(fileName,fileContent,(e)=>{
				console.log(e)
			})
	})

}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await new Promise((o)=>{
		fs.readFile(fileName,'utf-8',(e,d)=>{
			console.log(d)
		})
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await new Promise((r)=>{
		fs.appendFile(fileName,fileContent,(e)=>{
			console.log(e)
		})
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await new Promise((r)=>{
		fs.unlink(fileName,(e)=>{
			console.log(e)
		})
	})
	
}

myFileWriter('apple','i am apple')
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }