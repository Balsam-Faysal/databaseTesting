const setUpForTest = require('./setUpForTest');
const setUoForDevelopment = require('./setUoForDevelopment');
const setUpForProduction = require('./setUpForProduction');

module.exports = ()=>{
  
  switch (process.env.NODE_ENV) {
    case 'test': return setUpForTest(process.env.TEST_DB) break;
    case 'development' : return setUoForDevelopment(process.env.DEVELOPMENT_DB) break;
    case 'production': return setUpForProduction(process.env.PRODUCTION_DB) break;
    default: throw new Error(`NO Configration Foun For Database!!`) ;
  }
}
