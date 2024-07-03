const createUser = require('./createUser');
const loginUser = require('./loginUser');
const validateUser = require('./validateUser');
const infoUser = require('./infoUser');
const deleteUser = require('./deleteUser');
const modifyPwd = require('./modifyPwd');
const editUser = require('./editUser');
const recorverUserPassword = require('./recorverUserPassword');
const resetUserPassword = require('./resetUserPassword');

module.exports = {
  createUser,
  loginUser,
  validateUser,
  infoUser,
  deleteUser,
  modifyPwd,
  editUser,
  recorverUserPassword,
  resetUserPassword,
};
