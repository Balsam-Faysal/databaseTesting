require('env2')('./config.env');
module.exports= ()=>{
  const { NODE_ENV , CURRENT_USED_DB, TEST_DB, DEVELOPMENT_DB, PRODUCTION_DB} = process.env ;


  switch (NODE_ENV) {
    case 'test': return TEST_DB; break;
    case 'development': return DEVELOPMENT_DB; break;
    case 'production': return PRODUCTION_DB; break;
    default: return DEVELOPMENT_DB
  }

}
