const dbConnection = require('../db_connection');

exports.insert = comment => new Promise((resolve , reject)=>{
    const ps = {
      text : `INSERT INTO comments(user_id,content) values ($1,$2) RETURNING`,
      values:[comment.user_id , comment.post_id , comment.content]
    }
    dbConnection.query(ps , (err , res)=>{
      if(!err) return resolve(res)
      reject(err)
    })
})
exports.getById = id => new Promise((resolve , reject)=>{
    const ps = {
      text : `SELECT id from comments where id=$1`,
      values:[id]
    }
    dbConnection.query(ps , (err , res)=>{
      if(!err) return resolve(res)
      reject(err)
    })
})

exports.getByPostId = id => new Promise((resolve , reject)=>{
    const ps = {
      text : `SELECT id from comments where post_id=$1`,
      values:[id]
    }
    dbConnection.query(ps , (err , res)=>{
      if(!err) return resolve(res)
      reject(err)
    })
})
exports.getByUserId = id => new Promise((resolve , reject)=>{
    const ps = {
      text : `SELECT id from comments where user_id=$1`,
      values:[id]
    }
    dbConnection.query(ps , (err , res)=>{
      if(!err) return resolve(res)
      reject(err)
    })
})
