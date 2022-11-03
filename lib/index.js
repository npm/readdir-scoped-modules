const { readdirSync, promises: { readdir } } = require('fs')
const { join } = require('path')

const readdirScoped = async (dir) => {
  const results = []

  for (const item of await readdir(dir)) {
    if (item.startsWith('@')) {
      for (const scopedItem of await readdir(join(dir, item))) {
        results.push(join(item, scopedItem))
      }
    } else {
      results.push(item)
    }
  }

  return results
}

const readdirScopedSync = (dir) => {
  const results = []

  for (const item of readdirSync(dir)) {
    if (item.startsWith('@')) {
      for (const scopedItem of readdirSync(join(dir, item))) {
        results.push(join(item, scopedItem))
      }
    } else {
      results.push(item)
    }
  }

  return results
}

module.exports = readdirScoped
module.exports.sync = readdirScopedSync
