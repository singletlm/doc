const userForm = require('./inquirer-test')

userForm().then(data => {
  console.log(data)
}, err => {
  console.log(err)
})