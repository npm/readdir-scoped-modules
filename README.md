# readdir-scoped-modules

> **Warning**: This repo has been archived in favor of the `readdirScoped` method on [`@npmcli/fs`](https://github.com/npm/fs)

Like `fs.readdir` but handling `@org/module` dirs as if they were
a single entry.

Used by npm.

## USAGE

```javascript
var readdir = require('readdir-scoped-modules')

readdir('node_modules', function (er, entries) {
  // entries will be something like
  // ['a', '@org/foo', '@org/bar']
})
```
