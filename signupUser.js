const axios = require('axios')
const { internet } = require('faker');
const email = internet.exampleEmail()
const password = internet.password()
const fs = require('fs')

const signupUser = async () => {

  const user = await axios
    .post('http://localhost:3000/signup', { email, password })
      
  // fs.writeFileSync("./cypress/data.json", JSON.stringify(user.data))
  return user.data

}

// signupUser()
module.exports = signupUser