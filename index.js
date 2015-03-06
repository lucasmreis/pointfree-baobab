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

var log = c(function(text, x) {
  console.log(text, x);
  return x;
});

module.exports = {
  push: push,
  edit: edit,
  set: set,

  log: log
};