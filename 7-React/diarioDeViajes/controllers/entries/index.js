const getEntry = require('./getEntry');
const listEntries = require('./listEntries');
const deleteEntry = require('./deleteEntry');
const createEntry = require('./createEntry');
const voteEntry = require('./voteEntry');
const modifyEntry = require('./modifyEntry');
const addEntryPhoto = require('./addEntryPhoto');
const deleteEntryPhoto = require('./deleteEntryPhoto');

module.exports = {
  getEntry,
  listEntries,
  deleteEntry,
  createEntry,
  voteEntry,
  modifyEntry,
  addEntryPhoto,
  deleteEntryPhoto,
};
