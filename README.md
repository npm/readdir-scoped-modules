# readdir-scoped-modules

Like `fs.readdir` but handling `@org/module` dirs as if they were
a single entry.

Used by npm.

## USAGE

```javascript
const readdir = require('readdir-scoped-modules')

const entries = await readdir('node_modules')
// entries will be something like
// ['a', '@org/foo', '@org/bar']
```
