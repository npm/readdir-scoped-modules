const fs = require('fs/promises')
const { join } = require('path')

const readdir = async (dir) => {
  const results = []

  for (const item of await fs.readdir(dir)) {
    if (item.startsWith('@')) {
      for (const scopedItem of await fs.readdir(join(dir, item))) {
        results.push(join(item, scopedItem))
      }
    } else {
      results.push(item)
    }
  }

  return results
}

module.exports = readdir
