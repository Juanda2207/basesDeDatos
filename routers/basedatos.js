const { Client } = require('pg');
const Router = require('express-promise-router');

const client = new Client({
 
  connectionString: "postgres://bvwezjspwwpuzu:e5e88549efb56c68445d77487b237f1b6a6992dad45c887e9ffaebc0eca9ae16@ec2-184-72-162-198.compute-1.amazonaws.com:5432/d6d6almq3m3fj3",  
  ssl: {
    rejectUnauthorized: false
  }

});

client.connect();

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;

router.get('/consultatotalpacientes', async (req, res) => {
  //const { id } = req.params
  const { rows } = await client.query('SELECT * FROM pacientes');
  res.send(rows);
});

router.post('/insertarpacientes', async (req, res) => {
  const { nombre, apellido, numid } = req.body;
  await client.query(
    `INSERT INTO pacientes(nombre, apellido, numid) VALUES($1,$2,$3)`, [nombre, apellido, numid]
  );
  res.send('INSERTADO');
});


/*router.delete ('/borrarpaciente', async (req, res) => {

  const { nombre, apellido, numid } = req.body;  

  const { id } = parseInt(req.params.id);
  await client.query(`DELETE FROM pacientes where id = $1`, [
      id
  ]);
  res.send(`Paciente ${id} eliminado satisfactoriamente`);
});




router.post('/actualizapaciente', async (req, res) => {
  //const id = parseInt(req.params.id);
  const { nombre, apellido, numid } = req.body;

  await client.query('UPDATE pacientes SET nombre = $1, apellido = $2, numid = $3', [
      nombre,
      apellido,
      numid
  ]);
  res.send('Paciente actualizado satisfactoriamente');
});

*/