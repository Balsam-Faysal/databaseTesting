const test = require('tape');
const {user} = require('../../models');


test("User Model test unit", t => {
  const newUser = { id : 1 ,username : 'ahmad' , email:'ahmag@facg4.gsg' , password:'strongPwd'}

  t.plan(1)
  user.insert(newUser)
  .then(actual => t.deepEqual(newUser , actual,"Inserting New User" ))
  .catch(t.fail)
})
