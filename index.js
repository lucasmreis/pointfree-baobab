var c = require('curry');

var push = c(function(cursor, x) {
  return cursor.push(x).get();
});

var edit = c(function(cursor, x) {
  return cursor.edit(x).get();
});

var set = c(function(cursor, prop, x) {
  return cursor.set(prop, x).get();
});

module.exports = {
  push: push,
  edit: edit,
  set: set
};