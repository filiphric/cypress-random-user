const signupUser = require('../../signupUser.js')

module.exports = async (on, config) => {

  config.env = await signupUser()

  return config;

}
