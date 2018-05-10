const dbConnection = require('../db_connection');

exports.insert = user => new Promise((resolve , reject)=>{
    const ps = {
      text : `INSERT INTO users(username,email,password) values ($1,$2,$3) RETURNING *`,
      values:[user.username , user.email , user.password]
    }
    dbConnection.query(ps , (err , res)=>{
      if(!err) return resolve(res.rows[0])
      reject(err)
    })
})
exports.getById = id => new Promise((resolve , reject)=>{
    const ps = {
      text : `SELECT * from users where id=$1`,
      values:[id]
    }
    dbConnection.query(ps , (err , res)=>{
      if(!err) return resolve(res.rows[0])
      reject(err)
    })
})
exports.DeleteById = id => new Promise((resolve , reject)=>{
    const ps = {
      text : `DELETE FROM users where id =$1 RETURNING *`,
      values:[id]
    }
    dbConnection.query(ps , (err , res)=>{
      if(!err) return resolve(res.rows[0])
      reject(err)
    })
})
