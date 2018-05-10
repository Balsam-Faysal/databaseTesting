const userModels = require('./userModels');
const postModels = require('./postModels');
const commentsModels = require('./commentsModels');
require('env2')('./config.env');

module.exports = {
  user : userModels,
  post : postModels,
  comment : commentsModels
}
