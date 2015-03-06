# pointfree-baobab
Point free wrappers for BaobabJS

Example:

'''javascript
var r = require('ramda');
var Baobab = require('baobab');
var pb = require('pointfree-baobab');

var compose = r.compose;
var get = r.get;
var push = pb.push;

var state = new Baobab({
  foos = [1, 2, 3]
})

var foosCursor = state.select('foos');

// pointfree style function:
var addFoo = compose(
  log('Updated foo array:'),
  push(foosCursor),
  log('Adding new foo:'),
  get('newFoo'));

// if we call:
addFoo(4);
// -> state.get() = [1, 2, 3, 4]
```
