const { Pool } = require('pg');
const Router = require('express-promise-router');

const pool = new Pool({
  user: 'wapvmatlppdvoi',
  host: 'ec2-52-73-199-211.compute-1.amazonaws.com',
  database: 'd9jk089ivm4je',
  password: '1c397296cd4e22bba1fcfec22eb40aa92331beda827dbac4a80cc98790ab68b4',
  port: 5432,
});

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;

router.get('/consultatotalpacientes', async (req, res) => {
  //const { id } = req.params
  const { rows } = await pool.query('SELECT * FROM pacientes');
  res.send(rows);
});

router.post('/insertarpacientes', async (req, res) => {
  const { nombre, apellido, numid } = req.body;
  await pool.query(
    `INSERT INTO pacientes(nombre, apellido, numid) VALUES('${nombre}','${apellido}','${numid}')`
  );
  res.send('INSERTADO');
});

router.delete('/borrarpacientes', async (req, res) => {
  const { nombre, apellido, numid } = req.body;
  await pool.query(
    `DELETE FROM pacientes WHERE nombre='${nombre}', apellido='${apellido}',numid='${numid}'`
  );
  res.send('ELIMINADO');
});