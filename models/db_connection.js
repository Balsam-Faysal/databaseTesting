const { Pool } = require('pg');
require('env2')('./config.env');
const DBLinke = require('./config')();

if (!DBLinke) throw new Error('DATABASE_URL provided');

const pool =  new Pool({ connectionString: DBLinke, ssl: true })

module.exports = pool;
