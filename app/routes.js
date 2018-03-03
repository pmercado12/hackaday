//var Todo = require('./models/todo');
var database = require('./../config/database'); 			// load the database config

module.exports = function (app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/docentes', function (req, res) {

		const { Client } = require('pg')
		const client = new Client(database.url)

		client.connect()

		//client.query('SELECT $1::text as message', ['Hello world!'], (err, resp) => {
		client.query('SELECT * from "Docente"', (err, resp) => {
			console.log(err ? err.stack : "ok!") // Hello World!
			res.json(resp.rows);
		})

	});

	// create todo and send back all todos after creation
	app.post('/api/docentes', function (req, res) {
		var docente = req.body;

		const { Client } = require('pg')
		const client = new Client(database.url)

		client.connect()

		const query = {
			text: 'INSERT INTO "Docente"(paterno, materno,nombres,ci) VALUES($1, $2, $3, $4)',
			values: [docente.paterno, docente.materno, docente.nombres, docente.ci],
		}

		client.query(query)
			.then(resp => res.json())
			.catch(e => console.error(e.stack))

	});

	//materias

	app.get('/api/materias', function (req, res) {

		const { Client } = require('pg')
		const client = new Client(database.url)

		client.connect()

		//client.query('SELECT $1::text as message', ['Hello world!'], (err, resp) => {
		client.query('select m."idMateria",m.sigla,m.titulo,d.nombres,d.paterno,d.materno from "Materia" m,"Docente" d  WHERE m."idDocente" = d."idDocente"', (err, resp) => {
			console.log(err ? err.stack : "ok!") // Hello World!
			res.json(resp.rows);
		})

	});


	app.post('/api/materias', function (req, res) {
		var materia = req.body;

		const { Client } = require('pg')
		const client = new Client(database.url)

		client.connect()

		const query = {
			text: 'INSERT INTO "Materia"(sigla, titulo,"idDocente") VALUES($1, $2, $3)',
			values: [materia.sigla, materia.titulo, materia.idDocente],
		}

		client.query(query)
			.then(resp => res.json())
			.catch(e => console.error(e.stack))

	});




	// delete a todo
	app.delete('/api/todos/:todo_id', function (req, res) {
		Todo.remove({
			_id: req.params.todo_id
		}, function (err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function (err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function (req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};