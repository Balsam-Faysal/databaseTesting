const dbConnection = require('../db_connection');

exports.insert = post => new Promise((resolve , reject)=>{
    const ps = {
      text : `INSERT INTO users(user_id,content) values ($1,$2) RETURNING`,
      values:[post.user_id ,post.content]
    }
    dbConnection.query(ps , (err , res)=>{
      if(!err) return resolve(res)
      reject(err)
    })
})
exports.getById = id => new Promise((resolve , reject)=>{
    const ps = {
      text : `SELECT id from post where id=$1`,
      values:[id]
    }
    dbConnection.query(ps , (err , res)=>{
      if(!err) return resolve(res)
      reject(err)
    })
})
