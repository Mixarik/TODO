const Pool = require("pg").Pool;
const pool = new Pool({
   user:"postgres",
   password:"1221",
   host:"localhost",
   port:5432,
   database:"todo"
});

module.exports = pool;