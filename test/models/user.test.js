const test = require('tape');
const {user} = require('../../models');


test("User Model test unit", t => {
  const newUser = { id : 1 ,username : 'ahmad' , email:'ahmag@facg4.gsg' , password:'strongPwd'}


  t.plan(3)

  user.insert(newUser)
  .then(actual => t.deepEqual(newUser , actual,"Inserting New User" ))
  .catch(t.fail)

  user.getById(newUser.id)
  .then(actual => {
    t.deepEqual(actual , newUser,"Fitching User By ID")
  })
  .catch(t.fail)

})
