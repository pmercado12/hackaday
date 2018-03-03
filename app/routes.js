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

	app.get('/api/horario', function (req, res) {

		const { Client } = require('pg')
		const client = new Client(database.url)

		client.connect()

		//client.query('SELECT $1::text as message', ['Hello world!'], (err, resp) => {
		client.query('select a."idAula",d."idDia", m."titulo",h."horaInicio",h."horaFin",a."aula", d."dia" from "Materia" m,"Horario" h, "Dia" d , "Aula" a WHERE m."idMateria" = h."idMateria" and d."idDia" = h."idDia" and a."idAula" = h."idAula"',
			(err, resp) => {
				console.log(err ? err.stack : "ok!") // Hello World!
				console.log(resp.rows);
				res.json(resp.rows);
			})

	});

	app.get('/api/horario-semanal', function (req, res) {

		var idDocente = req.query.idDocente;
		const { Client } = require('pg')
		const client = new Client(database.url)

		client.connect()

		//client.query('SELECT $1::text as message', ['Hello world!'], (err, resp) => {
		client.query('select m.titulo,h."horaInicio",h."horaFin",a."aula", d."dia" from "Materia" m,"Horario" h, "Dia" d , "Aula" a WHERE m."idMateria" = h."idMateria" and d."idDia" = h."idDia" and a."idAula" = h."idAula" and m."idDocente" = ' + idDocente + '  ORDER  BY d."idDia"',
			(err, resp) => {
				console.log(err ? err.stack : "ok!") // Hello World!
				console.log(resp.rows);
				res.json(resp.rows);
			})
	});

	// create todo and send back all todos after creation
	app.post('/api/horario', function (req, res) {
		var horario = req.body;

		const { Client } = require('pg')
		const client = new Client(database.url)

		client.connect()

		const query = {
			text: 'INSERT INTO "Horario"("horaInicio", "horaFin", "idDia", "idMateria","idAula") VALUES($1, $2, $3, $4, $5)',
			values: [horario.horaInicio, horario.horaFin, horario.idDia, horario.idMateria, horario.idAula],
		}

		client.query(query)
			.then(resp => res.json())
			.catch(e => console.error(e.stack))

	});






	app.get('/api/aula', function (req, res) {

		const { Client } = require('pg')
		const client = new Client(database.url)

		client.connect()

		//client.query('SELECT $1::text as message', ['Hello world!'], (err, resp) => {
		client.query('SELECT * from "Aula"', (err, resp) => {
			console.log(err ? err.stack : "ok!") // Hello World!
			res.json(resp.rows);
		})

	});


	// create Aula
	app.post('/api/aula', function (req, res) {
		var aula = req.body;

		const { Client } = require('pg')
		const client = new Client(database.url)

		client.connect()

		const query = {
			text: 'INSERT INTO "Aula"(aula) VALUES($1)',
			values: [aula.aula],
		}

		client.query(query)
			.then(resp => res.json())
			.catch(e => console.error(e.stack))

	});


	app.get('/api/dia', function (req, res) {

		const { Client } = require('pg')
		const client = new Client(database.url)

		client.connect()

		//client.query('SELECT $1::text as message', ['Hello world!'], (err, resp) => {
		client.query('SELECT * from "Dia"', (err, resp) => {
			console.log(err ? err.stack : "ok!") // Hello World!
			res.json(resp.rows);
		})

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