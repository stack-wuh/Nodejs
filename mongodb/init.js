const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
const co = require('co')
const dataName = 'info'
const coll = 'info'

const arr = [
	{
		title: 'MongoDB Overview',
		description: 'MongoDB is no sql database',
		by_user: 'w3cschool.cc',
		url: 'http://www.w3cschool.cc',
		tags: ['mongodb', 'database', 'NoSQL'],
		likes: 100
	},
	{
		title: 'NoSQL Overview',
		description: 'No sql database is very fast',
		by_user: 'w3cschool.cc',
		url: 'http://www.w3cschool.cc',
		tags: ['mongodb', 'database', 'NoSQL'],
		likes: 10
	},
	{
		title: 'Neo4j Overview',
		description: 'Neo4j is no sql database',
		by_user: 'Neo4j',
		url: 'http://www.neo4j.com',
		tags: ['neo4j', 'database', 'NoSQL'],
		likes: 750
	},
	{
		title: 'MongoDB Overview',
		description: 'MongoDB is no sql database',
		by_user: 'w3cschool.cc',
		url: 'http://www.w3cschool.cc',
		tags: ['mongodb', 'database', 'NoSQL'],
		likes: 200
	},
	{
		title: 'NoSQL Overview',
		description: 'No sql database is very fast',
		by_user: 'w3cschool.cc',
		url: 'http://www.w3cschool.cc',
		tags: ['mongodb', 'database', 'NoSQL'],
		likes: 101
	},
	{
		title: 'Neo4j Overview',
		description: 'Neo4j is no sql database',
		by_user: 'Neo4j',
		url: 'http://www.neo4j.com',
		tags: ['neo4j', 'database', 'NoSQL'],
		likes: 1000
	},
]

co(function* (){
	var db = yield MongoClient.connect(url, {useNewUrlParser: true})
	console.log('Successful connect database info')

	var col = db.db(dataName).collection(coll)

	var r = yield col.find({'likes': {$gte: 100}, 'likes': {$lt: 700}}).limit(2).skip(1).toArray()
	// console.log(r)

	var r = yield col.aggregate([
		{
			$project: {
				title: 1,
				_id: 0,
				likes: 1,
				by_user: 1,
			}
		},

	]).limit(2).skip(1).toArray()
	console.log(r)


	// var r = yield col.insertMany(arr)
	// console.log(r)

	db.close()
}).catch(err => {
	console.error(new Error(err))
})